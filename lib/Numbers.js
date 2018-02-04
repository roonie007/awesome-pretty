const common      = require('./common');

const numberThousands = (x,str) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, str);
  return parts.join(".");
}

Number.prototype.pretty = function(opts = {}) {

  let nbr = common.validateNumber(this);

  var str = null ;
  if(opts.precision)
    str = nbr.toFixed(opts.precision).toString();
  else
    str = nbr.toString();

  if(opts.decimal)
    str = str.replace('.',opts.decimal);

  str = numberThousands(str,opts.thousand || ',');

  return str;

};
