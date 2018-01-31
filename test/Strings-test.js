const assert      = require('assert');
require('../index');

describe('String', function() {
  it('Camelize', () => {
    assert.equal("Hey hOw_are-yoU".camelize(), 'heyHowAreYou');
  });
  it('Camelize without forcing LowerCase', () => {
    assert.equal("Hey hOw_are-yoU".camelize(false), 'heyHOwAreYoU');
  });
  it('Capitalize', () => {
    assert.equal("hey how are you".capitalize(), 'Hey how are you');
  });
  it('Capitalize All', () => {
    assert.equal("hey how are you".capitalizeAll(), 'Hey How Are You');
  });

  it('Humanize', () => {
    assert.equal("heyHow_are-you".humanize(), 'Hey how are you');
  });
  it('Latinise', () => {
    assert.equal("Héy hôw äre you".latinise(), 'Hey how are you');
  });

  it('Trim', () => {
    assert.equal("  Hey   how \t  are \r\n\r\n   you".trim(), 'Hey how are you');
  });

  it('Escape HTML', () => {
    assert.equal("<span>Hey how are you</span>".escape(), '&lt;span&gt;Hey how are you&lt;/span&gt;');
  });
  it('Unescape HTML', () => {
    assert.equal("&lt;span&gt;Hey how are you&lt;/span&gt;".unescape(), '<span>Hey how are you</span>');
  });



  it('lines', () => {
    assert.deepEqual("Hey how\r\nare\nyou".lines(), ['Hey how','are','you']);
  });
  it('Pad', () => {
    assert.equal("Hey how are you".pad(20), '   Hey how are you  ');
  });
  it('Pad Left', () => {
    assert.equal("Hey".padLeft(), '  Hey');
  });
  it('Pad Left with char \'-\'', () => {
    assert.equal("Hey".padLeft(5,"-"), '--Hey');
  });
  it('Pad Left 10', () => {
    assert.equal("Hey".padLeft(10), '       Hey');
  });
  it('Pad Right', () => {
    assert.equal("Hey".padRight(), 'Hey  ');
  });
  it('Pad Right with char \'-\'', () => {
    assert.equal("Hey".padRight(5,"-"), 'Hey--');
  });
  it('Pad Right 10', () => {
    assert.equal("Hey".padRight(10), 'Hey       ');
  });
  it('Truncate 9', () => {
    assert.equal("Hey how are you".truncate(9), 'Hey how a...');
  });
  it('Truncate 9 with ---', () => {
    assert.equal("Hey how are you".truncate(9,'---'), 'Hey how a---');
  });
  it('repeat', () => {
    assert.equal('hey'.repeat(3), 'heyheyhey');
  });
  it('Replace', () => {
    assert.equal("Hey how are you".replace("Hey","Lol"), 'Lol how are you');
  });
  it('Replace All', () => {
    assert.equal("Hey how hey you Hey".replaceAll("Hey","Lol"), 'Lol how hey you Lol');
  });
  it('Slug', () => {
    assert.equal("heyHow_are-you".slug(), 'heyhow-are-you');
  });
  it('Strip Tags', () => {
    assert.equal("<span>Hey how <strong>are</strong> you</span>".stripTags(), 'Hey how are you');
  });
  it('Strip Tags only strong', () => {
    assert.equal("<span>Hey how <strong>are</strong> you</span>".stripTags("strong"), '<span>Hey how are you</span>');
  });
  it('Wrap HTML', () => {
    assert.equal("Hey how are you".wrapHTML(), '<span>Hey how are you</span>');
  });
  it('Wrap HTML with div tag', () => {
    assert.equal("Hey how are you".wrapHTML("div"), '<div>Hey how are you</div>');
  });
});
