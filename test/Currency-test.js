const assert      = require('assert');
require('../index');

describe('Currency', function() {
  it('654132654 to currency', () => {
    let nbr = 654132654;
    assert.equal(nbr.currency(), '$654,132,654.00');
  });
  it('987632465 to currency code TND (arabic currency)', () => {
    let nbr = 987632465;
    assert.equal(nbr.currency({code:'TND'}), 'د.ت.‏ 987,632,465.000');
  });
  it('2132488945 to currency locale fr-FR', () => {
    let nbr = 2132488945;
    assert.equal(nbr.currency({locale:'fr-FR'}), '2 132 488 945,00 €');
  });
  it('548765324 to currency custom', () => {
    let nbr = 548765324;
    assert.equal(nbr.currency({
      symbol: '@',
      decimal: '*',
      thousand: '^',
      precision: 1,
      format: '%v %s' // %s is the symbol and %v is the value
    }), '548^765^324*0 @');
  });

  it('$654,132,654.00 to number', () => {
    let str = '$654,132,654.00';
    assert.equal(str.currency(), 654132654);
  });
  it('987,632,465.000 to Number code TND', () => {
    let str = '987,632,465.000';
    assert.equal(str.currency({code:'TND'}), 987632465 );
  });
  it('2 132 488 945,00 € to number locale fr-FR', () => {
    let str = '2 132 488 945,00 €';
    assert.equal(str.currency({locale:'fr-FR'}), 2132488945 );
  });
  it('548^765^324*0 @ to number custom', () => {
    let str = '548^765^324*0 @';
    assert.equal(str.currency({
      symbol: '@',
      decimal: '*',
      thousand: '^',
      precision: 1,
      format: '%v %s' // %s is the symbol and %v is the value
    }), 548765324);
  });

});
