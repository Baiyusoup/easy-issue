const axios = require('axios').default;

const GITHUB_API = 'https://api.github.com';
const GITHUB_ACCEPT = 'application/vnd.github.v3+json';
let owner = '';
let repo = '';
let token = '';

function setRepoContext(context) {
  owner = context.owner;
  repo = context.repo;
  token = context.accessToken;
}

async function createIssue({ title, description, labels }) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/issues`;

  const config = {
    url,
    method: 'POST',
    headers: {
      Accept: GITHUB_ACCEPT,
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `token ${token}`,
    },
    data: {
      title,
      body: description,
      labels,
    },
  };

  if (!labels || (Array.isArray(labels) && labels.length === 0)) {
    delete config.data.labels;
  }
  return axios(config);
}

module.exports = {
  createIssue,
  setRepoContext,
};
