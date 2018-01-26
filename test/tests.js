const assert      = require('assert');
const pretty_all  = require('../index');

// describe('Bytes', function() {
//   it('10b', () => {
//     let pretty_byte = pretty_all.bytes(10);
//     assert.equal(pretty_byte, '10 B');
//   });
//   it('20Kb', () => {
//     let pretty_byte = pretty_all.bytes(20000);
//     assert.equal(pretty_byte, '20 kB');
//   });
//   it('30Mb', () => {
//     let pretty_byte = pretty_all.bytes(30000000);
//     assert.equal(pretty_byte, '30 MB');
//   });
//   it('40Gb', () => {
//     let pretty_byte = pretty_all.bytes(40000000000);
//     assert.equal(pretty_byte, '40 GB');
//   });
//   it('50Tb', () => {
//     let pretty_byte = pretty_all.bytes(50000000000000);
//     assert.equal(pretty_byte, '50 TB');
//   });
//   it('60Pb', () => {
//     let pretty_byte = pretty_all.bytes(60000000000000000);
//     assert.equal(pretty_byte, '60 PB');
//   });
// });
//
//
// describe('Millisecondes', function() {
//   it('15d 11h 23m 20s', () => {
//     let pretty_ms = pretty_all.ms(1337000000);
//     assert.equal(pretty_ms, '15d 11h 23m 20s');
//   });
//   it('1.3s', () => {
//     let pretty_ms = pretty_all.ms(1337);
//     assert.equal(pretty_ms, '1.3s');
//   });
//   it('133ms', () => {
//     let pretty_ms = pretty_all.ms(133);
//     assert.equal(pretty_ms, '133ms');
//   });
//   it('15 days 11 hours 1 minute 9 seconds', () => {
//     let pretty_ms = pretty_all.ms(1335669000, {verbose: true});
//     assert.equal(pretty_ms, '15 days 11 hours 1 minute 9 seconds');
//   });
// });
//
// describe('Timestamp', function() {
//   it('2012-05-14', () => {
//     let pretty_timestamp = pretty_all.timestamp(1337000000);
//     assert.equal(pretty_timestamp, '2012-05-14');
//   });
//   it('14/05/2012', () => {
//     let pretty_timestamp = pretty_all.timestamp(1337000000,'DD/MM/YYYY');
//     assert.equal(pretty_timestamp, '14/05/2012');
//   });
//   it('2012', () => {
//     let pretty_timestamp = pretty_all.timestamp(1337000000,'YYYY');
//     assert.equal(pretty_timestamp, '2012');
//   });
//   it('05', () => {
//     let pretty_timestamp = pretty_all.timestamp(1337000000,'MM');
//     assert.equal(pretty_timestamp, '05');
//   });
//   it('14', () => {
//     let pretty_timestamp = pretty_all.timestamp(1337000000,'DD');
//     assert.equal(pretty_timestamp, '14');
//   });
// });
//
// describe('Error', function() {
//   it('Error working', () => {
//     let pretty_error = pretty_all.error(new Error('this is an error'));
//     assert.equal(typeof pretty_error, 'string');
//   });
// });
//
// describe('JSON', function() {
//   it('JSON working', () => {
//     const obj = {
//       foo: 'bar',
//       'arr': [1, 2, 3],
//       nested: { hello: "world" }
//     };
//     let pretty_json = pretty_all.json(obj);
//     assert.equal(typeof pretty_json, 'string');
//   });
// });

describe('String', function() {
  it('Camelize', () => {
    let pretty_string = pretty_all.string.camelize("Hey hOw_are-yoU");
    assert.equal(pretty_string, 'heyHowAreYou');
  });
  it('Camelize without forcing LowerCase', () => {
    let pretty_string = pretty_all.string.camelize("Hey hOw_are-yoU",false);
    assert.equal(pretty_string, 'heyHOwAreYoU');
  });
  it('Capitalize', () => {
    let pretty_string = pretty_all.string.capitalize("hey how are you");
    assert.equal(pretty_string, 'Hey how are you');
  });
  it('Capitalize All', () => {
    let pretty_string = pretty_all.string.capitalizeAll("hey how are you");
    assert.equal(pretty_string, 'Hey How Are You');
  });

  it('Humanize', () => {
    let pretty_string = pretty_all.string.humanize("heyHow_are-you");
    assert.equal(pretty_string, 'Hey how are you');
  });
  it('Latinise', () => {
    let pretty_string = pretty_all.string.latinise("Héy hôw äre you");
    assert.equal(pretty_string, 'Hey how are you');
  });

  it('Trim', () => {
    let pretty_string = pretty_all.string.trim("  Hey   how \t  are \r\n\r\n   you");
    assert.equal(pretty_string, 'Hey how are you');
  });

  it('Escape HTML', () => {
    let pretty_string = pretty_all.string.escape("<span>Hey how are you</span>");
    assert.equal(pretty_string, '&lt;span&gt;Hey how are you&lt;/span&gt;');
  });
  it('Unescape HTML', () => {
    let pretty_string = pretty_all.string.unescape("&lt;span&gt;Hey how are you&lt;/span&gt;");
    assert.equal(pretty_string, '<span>Hey how are you</span>');
  });



  it('lines', () => {
    let pretty_string = pretty_all.string.lines("Hey how\r\nare\nyou");
    assert.deepEqual(pretty_string, ['Hey how','are','you']);
  });
  it('Pad', () => {
    let pretty_string = pretty_all.string.pad("Hey how are you",20);
    assert.equal(pretty_string, '   Hey how are you  ');
  });
  it('Pad Left', () => {
    let pretty_string = pretty_all.string.padLeft("Hey");
    assert.equal(pretty_string, '  Hey');
  });
  it('Pad Left with char \'-\'', () => {
    let pretty_string = pretty_all.string.padLeft("Hey",5,"-");
    assert.equal(pretty_string, '--Hey');
  });
  it('Pad Left 10', () => {
    let pretty_string = pretty_all.string.padLeft("Hey",10);
    assert.equal(pretty_string, '       Hey');
  });
  it('Pad Right', () => {
    let pretty_string = pretty_all.string.padRight("Hey");
    assert.equal(pretty_string, 'Hey  ');
  });
  it('Pad Right with char \'-\'', () => {
    let pretty_string = pretty_all.string.padRight("Hey",5,"-");
    assert.equal(pretty_string, 'Hey--');
  });
  it('Pad Right 10', () => {
    let pretty_string = pretty_all.string.padRight("Hey",10);
    assert.equal(pretty_string, 'Hey       ');
  });
  it('Truncate 9', () => {
    let pretty_string = pretty_all.string.truncate("Hey how are you",9);
    assert.equal(pretty_string, 'Hey how a...');
  });
  it('Truncate 9 with ---', () => {
    let pretty_string = pretty_all.string.truncate("Hey how are you",9,'---');
    assert.equal(pretty_string, 'Hey how a---');
  });
  it('repeat', () => {
    let pretty_string = pretty_all.string.repeat('hey',3);
    assert.equal(pretty_string, 'heyheyhey');
  });
  it('Replace', () => {
    let pretty_string = pretty_all.string.replace("Hey how are you","Hey","Lol");
    assert.equal(pretty_string, 'Lol how are you');
  });
  it('Replace All', () => {
    let pretty_string = pretty_all.string.replaceAll("Hey how hey you Hey","Hey","Lol");
    assert.equal(pretty_string, 'Lol how hey you Lol');
  });
  it('Slug', () => {
    let pretty_string = pretty_all.string.slug("heyHow_are-you");
    assert.equal(pretty_string, 'heyhow-are-you');
  });
  it('Strip Tags', () => {
    let pretty_string = pretty_all.string.stripTags("<span>Hey how <strong>are</strong> you</span>");
    assert.equal(pretty_string, 'Hey how are you');
  });
  it('Strip Tags only strong', () => {
    let pretty_string = pretty_all.string.stripTags("<span>Hey how <strong>are</strong> you</span>","strong");
    assert.equal(pretty_string, '<span>Hey how are you</span>');
  });
  it('Wrap HTML', () => {
    let pretty_string = pretty_all.string.wrapHTML("Hey how are you");
    assert.equal(pretty_string, '<span>Hey how are you</span>');
  });
  it('Wrap HTML with div tag', () => {
    let pretty_string = pretty_all.string.wrapHTML("Hey how are you","div");
    assert.equal(pretty_string, '<div>Hey how are you</div>');
  });








});
