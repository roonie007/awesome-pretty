const prettyBytes = require('pretty-bytes');
const prettyMs    = require('pretty-ms');
const timestamp   = require('./lib/pretty-timestamp');

const PrettyError = require('pretty-error');
let pe = new PrettyError();

const stringifyObject = require('stringify-object');

const pretty_all = {
  bytes: prettyBytes,
  ms: prettyMs,
  timestamp: timestamp,
  error: (error) => {
    return pe.render(error)
  },
  json: stringifyObject
};

module.exports = pretty_all;
