const assert      = require('assert');
require('../index');

describe('Phones', function() {
  it('Integer phone number', () => {
    assert.equal((632418652).phoneNumber('FR'), '+33 6 32 41 86 52');
    assert.equal((632418652).phoneNumber('FR','National'), '06 32 41 86 52');
  });
  it('String phone number', () => {
    assert.equal('632418652'.phoneNumber('FR'), '+33 6 32 41 86 52');
    assert.equal('632418652'.phoneNumber('FR','National'), '06 32 41 86 52');
  });
});
