const assert      = require('assert');
const pretty_all  = require('../index');

describe('Bytes', function() {
  it('10b', () => {
    let pretty_byte = pretty_all.bytes(10);
    assert.equal(pretty_byte, '10 B');
  });
  it('20Kb', () => {
    let pretty_byte = pretty_all.bytes(20000);
    assert.equal(pretty_byte, '20 kB');
  });
  it('30Mb', () => {
    let pretty_byte = pretty_all.bytes(30000000);
    assert.equal(pretty_byte, '30 MB');
  });
  it('40Gb', () => {
    let pretty_byte = pretty_all.bytes(40000000000);
    assert.equal(pretty_byte, '40 GB');
  });
  it('50Tb', () => {
    let pretty_byte = pretty_all.bytes(50000000000000);
    assert.equal(pretty_byte, '50 TB');
  });
  it('60Pb', () => {
    let pretty_byte = pretty_all.bytes(60000000000000000);
    assert.equal(pretty_byte, '60 PB');
  });
});


describe('Millisecondes', function() {
  it('15d 11h 23m 20s', () => {
    let pretty_ms = pretty_all.ms(1337000000);
    assert.equal(pretty_ms, '15d 11h 23m 20s');
  });
  it('1.3s', () => {
    let pretty_ms = pretty_all.ms(1337);
    assert.equal(pretty_ms, '1.3s');
  });
  it('133ms', () => {
    let pretty_ms = pretty_all.ms(133);
    assert.equal(pretty_ms, '133ms');
  });
  it('15 days 11 hours 1 minute 9 seconds', () => {
    let pretty_ms = pretty_all.ms(1335669000, {verbose: true});
    assert.equal(pretty_ms, '15 days 11 hours 1 minute 9 seconds');
  });
});

describe('Timestamp', function() {
  it('2012-05-14', () => {
    let pretty_timestamp = pretty_all.timestamp(1337000000);
    assert.equal(pretty_timestamp, '2012-05-14');
  });
  it('14/05/2012', () => {
    let pretty_timestamp = pretty_all.timestamp(1337000000,'DD/MM/YYYY');
    assert.equal(pretty_timestamp, '14/05/2012');
  });
  it('2012', () => {
    let pretty_timestamp = pretty_all.timestamp(1337000000,'YYYY');
    assert.equal(pretty_timestamp, '2012');
  });
  it('05', () => {
    let pretty_timestamp = pretty_all.timestamp(1337000000,'MM');
    assert.equal(pretty_timestamp, '05');
  });
  it('14', () => {
    let pretty_timestamp = pretty_all.timestamp(1337000000,'DD');
    assert.equal(pretty_timestamp, '14');
  });
});

describe('Error', function() {
  it('Error working', () => {
    let pretty_error = pretty_all.error(new Error('this is an error'));
    assert.equal(typeof pretty_error, 'string');
  });
});

describe('JSON', function() {
  it('JSON working', () => {
    const obj = {
      foo: 'bar',
      'arr': [1, 2, 3],
      nested: { hello: "world" }
    };
    let pretty_json = pretty_all.json(obj);
    assert.equal(typeof pretty_json, 'string');
  });
});
