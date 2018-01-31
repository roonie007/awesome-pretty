const common      = require('./common');
const moment      = require('moment');
const humanizeDuration = require('humanize-duration');

Number.prototype.msToPretty = function(lang = 'en') {
  let nbr = common.validateNumber(this);
  return humanizeDuration(nbr,{language:lang,decimal: '.', round:true});
}

Number.prototype.msToDate = function(format = 'YYYY-MM-DD hh:mm:ss',locale = 'en') {
  let nbr = common.validateNumber(this) ;
  let date = moment(nbr);
  date.locale(locale);
  return date.format(format);
}

Number.prototype.msToNanoSecondes = function() {
  let nbr = common.validateNumber(this);
  return nbr * 1000 * 1000
}
Number.prototype.msToMicroSecondes = function() {
  let nbr = common.validateNumber(this);
  return nbr * 1000
}
Number.prototype.msToSecondes = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000)
}
Number.prototype.msToMinutes = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000) / 60
}
Number.prototype.msToHours = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000) / 60 / 60
}
Number.prototype.msToDays = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000) / 60 / 60 / 24
}
Number.prototype.msToWeeks = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000) / 60 / 60 / 24 / 7
}
Number.prototype.msToMonths = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000) / 60 / 60 / 24 / 7 / 4.5
}
Number.prototype.msToYears = function() {
  let nbr = common.validateNumber(this);
  return (nbr / 1000) / 60 / 60 / 24 / 7 / 4.3452381 / 12
}
