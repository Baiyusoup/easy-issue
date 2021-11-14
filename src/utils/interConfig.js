module.exports = function interIssueConfig(pkg) {
  const owner = pkg.author;
  const repo = pkg.name;
  return {
    owner,
    repo,
  };
};
