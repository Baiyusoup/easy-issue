const grayMatter = require('gray-matter');
// const matterRegex = /---(.|\n)*---\n*/;

function formatMdToIssue(md) {
  const rawIssue = grayMatter(md);

  return {
    title: rawIssue.data.title,
    labels: rawIssue.data.labels,
    description: rawIssue.content.trim() || 'Nothing',
  };
}

module.exports = formatMdToIssue;
