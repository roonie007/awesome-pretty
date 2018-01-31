const common      = require('./common');

const si_regex = /(\d{0,})( |)(kb|mb|gb|tb|pb|eb|zb|yb|kilobyte|megabyte|gigabyte|terabyte|petabyte|exabyte|zettabyte|yottabyte)/i ;
const iec_regex  = /(\d{0,})( |)(kib|mib|gib|tib|pib|eib|zib|yib|kibibyte|mebibyte|gibibyte|tebibyte|pebibyte|exbibyte|zebibyte|yobibyte)/i ;

const size_si = 1000; // for normal people
const size_iec = 1024; // for developers (the default output)


function BytesToHuman(bytes,type = 'si') {
  var _type = type.trim().toLowerCase();
  var _size = _type == 'si' ? size_si : size_iec;
  var _unit = _type == 'si' ? 'B' : 'iB';

  var exp = Math.log(bytes) / Math.log(_size) | 0;
  var result = (bytes / Math.pow(_size, exp)).toFixed(2);

  var str_result = ' ' + (exp == 0 ? 'bytes': 'kMGTPEZY'[exp - 1] + _unit) ;
  return result.toString().endsWith('.00') ? parseInt(result)+str_result : result+str_result
}


function HumanToBytes(size, type) {
  var _type,_unit,_size;
  var is_iec = iec_regex.test(size);
  var is_si = si_regex.test(size);
  if(is_iec || is_si) {
    let match = size.match( is_iec ? iec_regex : si_regex);
    _size = parseFloat(match[1]) || 0 ;
    _unit = match[3][0].toLowerCase();
    const units = ' kmgtpezy';
    return _size * Math.pow((type == 'si' ? size_si : size_iec ),units.indexOf(_unit));
  }
  if(size.toLowerCase().indexOf('byte') == -1)
    return 0;
  else
    return parseInt(size.toLowerCase().replace('bytes','').replace('byte',''))
}

Number.prototype.bytes = function(type = 'si') {
  let nbr = common.validateNumber(this);
  return BytesToHuman(nbr,type)
}

String.prototype.bytes = function(type = 'iec') {
  let str = common.validateString(this);
  return HumanToBytes(str,type)
}

console.log('10 bytes'.bytes());
