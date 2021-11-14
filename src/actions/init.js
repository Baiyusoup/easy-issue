const path = require('path');
const fs = require('fs-extra');
const interConfig = require('../utils/interConfig');
const { log } = require('../utils/log');
const { EDITOR_FILE, CONFIG_FILE } = require('../utils/constants');

const template = `---\ntitle: Hello Baiyu issue\n---\n\nThis is test content`;

function init(context, editor = EDITOR_FILE) {
  const pkgPath = path.join(context, 'package.json');
  let pkg = {};
  if (fs.existsSync(pkgPath)) {
    pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.scripts.issue = 'issue';
    fs.removeSync(pkgPath);
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    log.success('Add issue command into scripts.');
  } else {
    log.error(`package.json don't exist! Add issue command fail!`);
  }

  const configPath = path.join(context, CONFIG_FILE);
  if (!fs.existsSync(configPath)) {
    const config = interConfig(pkg);
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config)}\n`);
    log.success(`Created ${configPath}.`);
  }

  const editorPath = path.join(context, editor);
  if (!fs.existsSync(editorPath)) {
    fs.writeFileSync(editorPath, template);
    log.success(`Created ${editorPath}.`);
  }

  log.success('Init successful!');
}

module.exports = init;
