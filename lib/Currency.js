const common          = require('./common');
const currencyFormatter = require('currency-formatter');

Number.prototype.currency = function(opts = {code:'USD'}) {
  let nbr = common.validateNumber(this);
  return currencyFormatter.format(nbr, opts);
}

String.prototype.currency = function(opts = {code:'USD'}) {
  let nbr = common.validateString(this);
  return currencyFormatter.unformat(nbr, opts);
}
