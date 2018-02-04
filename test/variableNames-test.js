const assert      = require('assert');
require('../index');



describe('Variable names', function() {

  it('camelCase', () => {
    assert.equal('foo-bar'.camelCase(), 'fooBar');
    assert.equal('foo_bar'.camelCase(), 'fooBar');
    assert.equal('Foo-Bar'.camelCase(), 'fooBar');
    assert.equal('--foo.bar'.camelCase(), 'fooBar');
    assert.equal('__foo__bar__'.camelCase(), 'fooBar');
    assert.equal('foo bar'.camelCase(), 'fooBar');
  });
  it('constantCase', () => {
    assert.equal('foo-bar'.constantCase(), 'FOO_BAR');
    assert.equal('foo_bar'.constantCase(), 'FOO_BAR');
    assert.equal('Foo-Bar'.constantCase(), 'FOO_BAR');
    assert.equal('--foo.bar'.constantCase(), 'FOO_BAR');
    assert.equal('__foo__bar__'.constantCase(), 'FOO_BAR');
    assert.equal('foo bar'.constantCase(), 'FOO_BAR');
  });

  it('dotCase', () => {
    assert.equal('foo-bar'.dotCase(), 'foo.bar');
    assert.equal('foo_bar'.dotCase(), 'foo.bar');
    assert.equal('Foo-Bar'.dotCase(), 'foo.bar');
    assert.equal('--foo.bar'.dotCase(), 'foo.bar');
    assert.equal('__foo__bar__'.dotCase(), 'foo.bar');
    assert.equal('foo bar'.dotCase(), 'foo.bar');
  });

  it('headerCase', () => {
    assert.equal('foo-bar'.headerCase(), 'Foo-Bar');
    assert.equal('foo_bar'.headerCase(), 'Foo-Bar');
    assert.equal('Foo-Bar'.headerCase(), 'Foo-Bar');
    assert.equal('--foo.bar'.headerCase(), 'Foo-Bar');
    assert.equal('__foo__bar__'.headerCase(), 'Foo-Bar');
    assert.equal('foo bar'.headerCase(), 'Foo-Bar');
  });

  it('noCase', () => {
    assert.equal('foo-bar'.noCase(), 'foo bar');
    assert.equal('foo_bar'.noCase(), 'foo bar');
    assert.equal('Foo-Bar'.noCase(), 'foo bar');
    assert.equal('--foo.bar'.noCase(), 'foo bar');
    assert.equal('__foo__bar__'.noCase(), 'foo bar');
    assert.equal('foo bar'.noCase(), 'foo bar');
  });

  it('paramCase', () => {
    assert.equal('foo-bar'.paramCase(), 'foo-bar');
    assert.equal('foo_bar'.paramCase(), 'foo-bar');
    assert.equal('Foo-Bar'.paramCase(), 'foo-bar');
    assert.equal('--foo.bar'.paramCase(), 'foo-bar');
    assert.equal('__foo__bar__'.paramCase(), 'foo-bar');
    assert.equal('foo bar'.paramCase(), 'foo-bar');
  });

  it('pascalCase', () => {
    assert.equal('foo-bar'.pascalCase(), 'FooBar');
    assert.equal('foo_bar'.pascalCase(), 'FooBar');
    assert.equal('Foo-Bar'.pascalCase(), 'FooBar');
    assert.equal('--foo.bar'.pascalCase(), 'FooBar');
    assert.equal('__foo__bar__'.pascalCase(), 'FooBar');
    assert.equal('foo bar'.pascalCase(), 'FooBar');
  });

  it('lowerCase', () => {
    assert.equal('foo-bar'.lowerCase(), 'foo-bar');
    assert.equal('foo_bar'.lowerCase(), 'foo_bar');
    assert.equal('Foo-Bar'.lowerCase(), 'foo-bar');
    assert.equal('--foo.bar'.lowerCase(), '--foo.bar');
    assert.equal('__foo__bar__'.lowerCase(), '__foo__bar__');
    assert.equal('foo bar'.lowerCase(), 'foo bar');
  });
  it('lowerCaseFirst', () => {
    assert.equal('foo-bar'.lowerCaseFirst(), 'foo-bar');
    assert.equal('foo_bar'.lowerCaseFirst(), 'foo_bar');
    assert.equal('Foo-Bar'.lowerCaseFirst(), 'foo-Bar');
    assert.equal('--foo.bar'.lowerCaseFirst(), '--foo.bar');
    assert.equal('__foo__bar__'.lowerCaseFirst(), '__foo__bar__');
    assert.equal('foo bar'.lowerCaseFirst(), 'foo bar');
  });
  it('pathCase', () => {
    assert.equal('foo-bar'.pathCase(), 'foo/bar');
    assert.equal('foo_bar'.pathCase(), 'foo/bar');
    assert.equal('Foo-Bar'.pathCase(), 'foo/bar');
    assert.equal('--foo.bar'.pathCase(), 'foo/bar');
    assert.equal('__foo__bar__'.pathCase(), 'foo/bar');
    assert.equal('foo bar'.pathCase(), 'foo/bar');
  });
  it('sentenceCase', () => {
    assert.equal('foo-bar'.sentenceCase(), 'Foo bar');
    assert.equal('foo_bar'.sentenceCase(), 'Foo bar');
    assert.equal('Foo-Bar'.sentenceCase(), 'Foo bar');
    assert.equal('--foo.bar'.sentenceCase(), 'Foo bar');
    assert.equal('__foo__bar__'.sentenceCase(), 'Foo bar');
    assert.equal('foo bar'.sentenceCase(), 'Foo bar');
  });
  it('snakeCase', () => {
    assert.equal('foo-bar'.snakeCase(), 'foo_bar');
    assert.equal('foo_bar'.snakeCase(), 'foo_bar');
    assert.equal('Foo-Bar'.snakeCase(), 'foo_bar');
    assert.equal('--foo.bar'.snakeCase(), 'foo_bar');
    assert.equal('__foo__bar__'.snakeCase(), 'foo_bar');
    assert.equal('foo bar'.snakeCase(), 'foo_bar');
  });
  it('swapCase', () => {
    assert.equal('foo-bar'.swapCase(), 'FOO-BAR');
    assert.equal('foo_bar'.swapCase(), 'FOO_BAR');
    assert.equal('Foo-Bar'.swapCase(), 'fOO-bAR');
    assert.equal('--foo.bar'.swapCase(), '--FOO.BAR');
    assert.equal('__foo__bar__'.swapCase(), '__FOO__BAR__');
    assert.equal('foo bar'.swapCase(), 'FOO BAR');
  });
  it('titleCase', () => {
    assert.equal('foo-bar'.titleCase(), 'Foo Bar');
    assert.equal('foo_bar'.titleCase(), 'Foo Bar');
    assert.equal('Foo-Bar'.titleCase(), 'Foo Bar');
    assert.equal('--foo.bar'.titleCase(), 'Foo Bar');
    assert.equal('__foo__bar__'.titleCase(), 'Foo Bar');
    assert.equal('foo bar'.titleCase(), 'Foo Bar');
  });
  it('upperCase', () => {
    assert.equal('foo-bar'.upperCase(), 'FOO-BAR');
    assert.equal('foo_bar'.upperCase(), 'FOO_BAR');
    assert.equal('Foo-Bar'.upperCase(), 'FOO-BAR');
    assert.equal('--foo.bar'.upperCase(), '--FOO.BAR');
    assert.equal('__foo__bar__'.upperCase(), '__FOO__BAR__');
    assert.equal('foo bar'.upperCase(), 'FOO BAR');
  });
  it('upperCaseFirst', () => {
    assert.equal('foo-bar'.upperCaseFirst(), 'Foo-bar');
    assert.equal('foo_bar'.upperCaseFirst(), 'Foo_bar');
    assert.equal('Foo-Bar'.upperCaseFirst(), 'Foo-Bar');
    assert.equal('--foo.bar'.upperCaseFirst(), '--foo.bar');
    assert.equal('__foo__bar__'.upperCaseFirst(), '__foo__bar__');
    assert.equal('foo bar'.upperCaseFirst(), 'Foo bar');
  });
});
