const isNumber    = require('is-number');

module.exports = {
  validateString : (str) => {
    if(str === null || str === undefined)
      return '';
    else if(typeof str !== 'string')
      return str+'';
    else
      return str.toString()
  },
  validateNumber : (nbr) => {
    if(isNumber(nbr)) {
      let nbrCheck = parseFloat(nbr);
      if(Number.isInteger(nbrCheck))
        return parseInt(nbrCheck);
      return nbrCheck;
    }
    else
      return infinity
  }
}
