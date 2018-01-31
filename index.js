const PrettyError = require('pretty-error');
let pe = new PrettyError();

require('./lib/Strings')
require('./lib/Numbers')
require('./lib/Bytes')
require('./lib/Millisecondes')
require('./lib/JSON')

const awesome_pretty = {
  error: (error) => {
    return pe.render(error)
  },
};

module.exports = awesome_pretty ;
