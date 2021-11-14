const pico = require('picocolors');

/* eslint-disable no-console */
function log(message) {
  console.log(message);
}

function error(message) {
  console.error(pico.red(message));
}

function success(message) {
  console.log(pico.green(message));
}

exports.log = {
  log,
  error,
  success,
};
