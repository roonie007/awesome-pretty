const stringifyObject = require('stringify-object');

Object.prototype.prettyJSON = function(opts = {}) {
  return stringifyObject(this,{
    indent: (opts.indent || '\t').repeat(opts.length || 1),
    singleQuotes: opts.singleQuotes || true
  });
}
