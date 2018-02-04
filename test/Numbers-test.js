const assert      = require('assert');
require('../index');

describe('Numbers', function() {
  it('Pretty numbers', () => {
    assert.equal((15).pretty(), '15');
    assert.equal((7585).pretty(), '7,585');
    assert.equal((2727272728).pretty({thousand:'^'}), '2^727^272^728');
    assert.equal((1727255.4425).pretty({precision:3}), '1,727,255.442');
  });
});
