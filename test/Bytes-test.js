const assert      = require('assert');
require('../index');

describe('Bytes', function() {
  it('Bytes to Human', () => {
    assert.equal((10).bytes(), '10 bytes');
    assert.equal((20000).bytes(), '20 kB');
    assert.equal((30000000).bytes(), '30 MB');
    assert.equal((40000000000).bytes(), '40 GB');
    assert.equal((50000000000000).bytes(), '50 TB');
    assert.equal((60000000000000000).bytes(), '60 PB');
  });

  it('Human to Bytes', () => {
    assert.equal('10 bytes'.bytes('si'),10);
    assert.equal('20 kB'.bytes('si'),20000);
    assert.equal('30 MB'.bytes('si'),30000000);
    assert.equal('40 GB'.bytes('si'),40000000000);
    assert.equal('50 TB'.bytes('si'),50000000000000);
    assert.equal('60 PB'.bytes('si'),60000000000000000);
  });
});
