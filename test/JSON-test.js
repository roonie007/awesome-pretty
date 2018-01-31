const assert      = require('assert');
require('../index');

describe('JSON', function() {
  it('JSON working', () => {
    const obj = {'hey':'how'};
    assert.equal(typeof obj.prettyJSON(), 'string');
  });
});
