const minimist = require('minimist');
const defaultAction = require('./actions/default');
const initAction = require('./actions/init');
const { log } = require('./utils/log');

const args = minimist(process.argv.slice(2));
const cwd = process.cwd();

const command = args._[0];

if (command) {
  switch (command) {
    case 'init':
      initAction(cwd);
      break;
    default:
      log.error(`You exec the command: ${command}, but it is invalid command.`);
      break;
  }
} else {
  defaultAction(cwd).catch((e) => {
    log.error(e);
  });
}
