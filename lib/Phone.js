const common      = require('./common');
const libphonenumber = require('libphonenumber-js');


Number.prototype.phoneNumber = function(country='US',type='International') {
  let nbr = common.validateNumber(this);
  return libphonenumber.format(nbr.toString(), country, type);
};

String.prototype.phoneNumber = function(country='US',type='International') {
  let str = common.validateString(this);
  return libphonenumber.format(str, country, type);
};
