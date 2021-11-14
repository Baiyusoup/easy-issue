const path = require('path');
const fs = require('fs-extra');

const processMd = require('../processMd');
const githubAPI = require('../github');
const { log } = require('../utils/log');
const { CONFIG_FILE, EDITOR_FILE } = require('../utils/constants');

async function postIssue(context, config = {}) {
  const configPath = path.resolve(context, CONFIG_FILE);
  let editor = config.editor || EDITOR_FILE;
  let _config = {};

  const { owner, repo, accessToken } = config;
  if (owner && repo && accessToken) {
    _config = config;
  } else if (fs.existsSync(configPath)) {
    _config = require(configPath);
  } else {
    log.error(`Error missing issue config.`);
    process.exit(1);
  }

  if (!('owner' in _config && 'repo' in _config && 'accessToken' in _config)) {
    log.error('Error missing owner, repo or accessToken.');
    process.exit(1);
  }

  if (/\.md$/.test(editor)) {
    const filepath = path.join(context, editor);
    if (!fs.existsSync(filepath)) {
      log.error('Error nothing transform issue, do you have content or editor.md?');
      process.exit(1);
    }
    editor = fs.readFileSync(filepath, 'utf-8');
  }

  const issue = processMd(editor);

  githubAPI.setRepoContext(_config);

  const response = await githubAPI.createIssue(issue);
  log.success(`${response.status} ${response.statusText}`);
  return response;
}

module.exports = postIssue;
