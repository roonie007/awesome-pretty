### awesome-pretty
Group up all available pretty modules in one

### IMPORTANT
Big changes from last version, All functions are now nested in String,Number,Object except the Error

#### Install
```bash
npm install --save awesome-pretty
```

### TODO
- [x] [[Bytes](#Bytes)
- [x] [Millisecondes](#Millisecondes)
- [x] [Error](#Error)
- [x] [JSON](#JSON)
- [x] [String](#String)
- [x] [Number](#Number)
- [x] [Currency](#Currency)
- [ ] Date
- [ ] Url
- [x] [Variable Name](#variableNames)
- [x] [Phone Number](#phoneNumbers)

#### Use
```javascript
const awesome_pretty = require('awesome-pretty');
```

#### <a name="Bytes"></a>Bytes
```javascript

let size_in_bytes = 30000000; // Number
size_in_bytes.bytes();
// => '30 MB'
let size_in_bytes_iec = 30000000; // Number
size_in_bytes_iec.bytes('iec');
// => '28.61 MiB'

let size_in_human = '30 MB'; // String
size_in_human.bytes();
// => 30000000
let size_in_human_iec = '30 MB'; // String
size_in_human_iec.bytes('iec');
// => 31457280

```

#### <a name="Millisecondes"></a>Millisecondes
```javascript
let milliseconds = 6546546116541 ;
milliseconds.msToPretty();
// => '207 years, 5 months, 1 week, 4 days, 6 hours, 31 minutes, 57 seconds'

let milliseconds_fr = 6546546116541 ;
milliseconds_fr.msToPretty('fr');
// => '207 ans, 5 mois, 1 semaine, 4 jours, 6 heures, 31 minutes, 57 secondes'

let milliseconds = 1517415909000 ;
milliseconds.msToDate();
// => '2018-01-31 05:25:09'

let milliseconds_custom = 1517415909000 ;
milliseconds_custom.msToDate('MM/DD/YYYY HH:ss');
// => 'Wed 01/31/2018 17:09'

let milliseconds_custom_fr = 1517415909000 ;
milliseconds_custom_fr.msToDate('MM/DD/YYYY HH:ss','fr');
// => 'mer. 01/31/2018 17:09'
```

#### <a name="Error"></a>Error
```javascript
const awesome_pretty = require('awesome-pretty');
awesome_pretty.error(new Error('this is an error'));
// console.log it and you will have a beautiful Error
```

#### <a name="JSON"></a>JSON
```javascript
const obj = {
  foo: 'bar',
  'arr': [1, 2, 3]
};
obj.prettyJSON();
/*
{
  "foo": "bar",
  "arr": [1,2,3]
}
*/

obj.prettyJSON(' ',5); // default ('\t',1)
/*
{
     "foo": "bar",
     "arr": [1,2,3]
}
*/
```

#### <a name="String"></a>String
```javascript
'Hey hOw_are-yoU'.pretty(); // this function will use slug() then humanize() then capitalize()
// => 'Hey how are you'

'Hey hOw_are-yoU'.camelize();
// => 'heyHowAreYou'

'Hey hOw_are-yoU'.camelize(false);
// => 'heyHOwAreYoU'

'hey how are you'.capitalize();
// => 'Hey how are you'

'hey how are you'.capitalizeAll();
// => 'Hey How Are You'

'heyHow_are-you'.humanize();
// => 'Hey how are you'

'Héy hôw äre you'.latinise();
// => 'Hey how are you'

'  Hey   how \t  are \r\n\r\n   you'.trim();
// => 'Hey how are you'

'<span>Hey how are you</span>'.escape();
// => '&lt;span&gt;Hey how are you&lt;/span&gt;'

'&lt;span&gt;Hey how are you&lt;/span&gt;'.unescape();
// => '<span>Hey how are you</span>'

'Hey how\r\nare\nyou'.lines();
// => ['Hey how','are','you']);

'Hey how are you'.pad(20);
// => '   Hey how are you  '

'Hey'.padLeft();
// => '  Hey'

'Hey'.padLeft(5,'-');
// => '--Hey'

'Hey'.padLeft(10);
// => '       Hey'

'Hey'.padRight();
// => 'Hey  '

'Hey'.padRight(5,'-');
// => 'Hey--'

'Hey'.padRight(10);
// => 'Hey       '

'Hey how are you'.truncate(9);
// => 'Hey how a...'

'Hey how are you'.truncate(9,'---');
// => 'Hey how a---'

'hey'.repeat(3);
// => 'heyheyhey'

'Hey how are you'.replace('Hey','Lol');
// => 'Lol how are you'

'Hey how hey you Hey'.replaceAll('Hey','Lol');
// => 'Lol how hey you Lol'

'heyHow_are-you'.slug();
// => 'heyhow-are-you'

'<span>Hey how <strong>are</strong> you</span>'.stripTags();
// => 'Hey how are you'

'<span>Hey how <strong>are</strong> you</span>'.stripTags('strong');
// => '<span>Hey how are you</span>'

'Hey how are you'.wrapHTML();
// => '<span>Hey how are you</span>'

'Hey how are you'.wrapHTML('div');
// => '<div>Hey how are you</div>'
```

#### <a name="Currency"></a>Currency
```javascript
(654132654).currency();
// => '$654,132,654.00'

(987632465).currency({code:'TND'});
// => 'د.ت.‏ 987,632,465.000'

(2132488945).currency({locale:'fr-FR'});
// => '2 132 488 945,00 €'

(548765324).currency({
  symbol: '@', // Currency Sign
  decimal: '*', // Decimal character
  thousand: '^', // Thousand separator
  precision: 1, // How many numbers after the deciaml character
  format: '%v %s' // %s is the symbol and %v is the value
});
// => '548^765^324*0 @'

'$654,132,654.00'.currency();
// => 654132654

//as you can see, I removed the Arabic sign "د.ت." to make it work
'987,632,465.000'.currency({code:'TND'});
// => 987632465

'2 132 488 945,00 €'.currency({locale:'fr-FR'});
// => 2132488945

'548^765^324*0 @'.currency({
  symbol: '@', // Currency Sign
  decimal: '*', // Decimal character
  thousand: '^', // Thousand separator
  precision: 1, // How many numbers after the deciaml character
  format: '%v %s' // %s is the symbol and %v is the value
});
// => 548765324
```

#### <a name="Number"></a>Number
```javascript
let nbr = 15 ;
nbr.pretty();
// => '15'

nbr = 7585.547 ;
nbr.pretty();
// => '7,585.547'

nbr = 2727272728 ;
nbr.pretty({thousand:'^'});
// => '2^727^272^728'

nbr = 1727255.4425 ;
nbr.pretty({precision:3});
// => 1,727,255.442

nbr = 1727255.4425 ;
nbr.pretty({thousand:'^',precision:2,decimal:'*'});
// => 1^727^255*44
```

#### <a name="phoneNumbers"></a>Phone Number
```javascript
let nbr = 632418652 ;
nbr.phoneNumber('FR');
// => '+33 6 32 41 86 52'

let nbr = 632418652 ;
nbr.phoneNumber('FR','National');
// => '06 32 41 86 52'
// International(is default) | National | E.164 | RFC3966

```

#### <a name="variableNames"></a>Variable Name
```javascript

'foo-bar'.camelCase(); //'fooBar'
'foo_bar'.camelCase(); //'fooBar'
'Foo-Bar'.camelCase(); //'fooBar'
'--foo.bar'.camelCase(); //'fooBar'
'__foo__bar__'.camelCase(); //'fooBar'
'foo bar'.camelCase(); //'fooBar'

'foo-bar'.snakeCase(); //'foo_bar'
'foo_bar'.snakeCase(); //'foo_bar'
'Foo-Bar'.snakeCase(); //'foo_bar'
'--foo.bar'.snakeCase(); //'foo_bar'
'__foo__bar__'.snakeCase(); //'foo_bar'
'foo bar'.snakeCase(); //'foo_bar'

'foo-bar'.pascalCase(); //'FooBar'
'foo_bar'.pascalCase(); //'FooBar'
'Foo-Bar'.pascalCase(); //'FooBar'
'--foo.bar'.pascalCase(); //'FooBar'
'__foo__bar__'.pascalCase(); //'FooBar'
'foo bar'.pascalCase(); //'FooBar'

'foo-bar'.constantCase(); //'FOO_BAR'
'foo_bar'.constantCase(); //'FOO_BAR'
'Foo-Bar'.constantCase(); //'FOO_BAR'
'--foo.bar'.constantCase(); //'FOO_BAR'
'__foo__bar__'.constantCase(); //'FOO_BAR'
'foo bar'.constantCase(); //'FOO_BAR'

'foo-bar'.paramCase(); //'foo-bar'
'foo_bar'.paramCase(); //'foo-bar'
'Foo-Bar'.paramCase(); //'foo-bar'
'--foo.bar'.paramCase(); //'foo-bar'
'__foo__bar__'.paramCase(); //'foo-bar'
'foo bar'.paramCase(); //'foo-bar'

'foo-bar'.dotCase(); //'foo.bar'
'foo_bar'.dotCase(); //'foo.bar'
'Foo-Bar'.dotCase(); //'foo.bar'
'--foo.bar'.dotCase(); //'foo.bar'
'__foo__bar__'.dotCase(); //'foo.bar'
'foo bar'.dotCase(); //'foo.bar'

'foo-bar'.pathCase(); //'foo/bar'
'foo_bar'.pathCase(); //'foo/bar'
'Foo-Bar'.pathCase(); //'foo/bar'
'--foo.bar'.pathCase(); //'foo/bar'
'__foo__bar__'.pathCase(); //'foo/bar'
'foo bar'.pathCase(); //'foo/bar'

'foo-bar'.headerCase(); //'Foo-Bar'
'foo_bar'.headerCase(); //'Foo-Bar'
'Foo-Bar'.headerCase(); //'Foo-Bar'
'--foo.bar'.headerCase(); //'Foo-Bar'
'__foo__bar__'.headerCase(); //'Foo-Bar'
'foo bar'.headerCase(); //'Foo-Bar'

'foo-bar'.noCase(); //'foo bar'
'foo_bar'.noCase(); //'foo bar'
'Foo-Bar'.noCase(); //'foo bar'
'--foo.bar'.noCase(); //'foo bar'
'__foo__bar__'.noCase(); //'foo bar'
'foo bar'.noCase(); //'foo bar'

'foo-bar'.sentenceCase(); //'Foo bar'
'foo_bar'.sentenceCase(); //'Foo bar'
'Foo-Bar'.sentenceCase(); //'Foo bar'
'--foo.bar'.sentenceCase(); //'Foo bar'
'__foo__bar__'.sentenceCase(); //'Foo bar'
'foo bar'.sentenceCase(); //'Foo bar'

'foo-bar'.swapCase(); //'FOO-BAR'
'foo_bar'.swapCase(); //'FOO_BAR'
'Foo-Bar'.swapCase(); //'fOO-bAR'
'--foo.bar'.swapCase(); //'--FOO.BAR'
'__foo__bar__'.swapCase(); //'__FOO__BAR__'
'foo bar'.swapCase(); //'FOO BAR'

'foo-bar'.titleCase(); //'Foo Bar'
'foo_bar'.titleCase(); //'Foo Bar'
'Foo-Bar'.titleCase(); //'Foo Bar'
'--foo.bar'.titleCase(); //'Foo Bar'
'__foo__bar__'.titleCase(); //'Foo Bar'
'foo bar'.titleCase(); //'Foo Bar'

'foo-bar'.lowerCase(); //'foo-bar'
'foo_bar'.lowerCase(); //'foo_bar'
'Foo-Bar'.lowerCase(); //'foo-bar'
'--foo.bar'.lowerCase(); //'--foo.bar'
'__foo__bar__'.lowerCase(); //'__foo__bar__'
'foo bar'.lowerCase(); //'foo bar'

'foo-bar'.lowerCaseFirst(); //'foo-bar'
'foo_bar'.lowerCaseFirst(); //'foo_bar'
'Foo-Bar'.lowerCaseFirst(); //'foo-Bar'
'--foo.bar'.lowerCaseFirst(); //'--foo.bar'
'__foo__bar__'.lowerCaseFirst(); //'__foo__bar__'
'foo bar'.lowerCaseFirst(); //'foo bar'

'foo-bar'.upperCase(); //'FOO-BAR'
'foo_bar'.upperCase(); //'FOO_BAR'
'Foo-Bar'.upperCase(); //'FOO-BAR'
'--foo.bar'.upperCase(); //'--FOO.BAR'
'__foo__bar__'.upperCase(); //'__FOO__BAR__'
'foo bar'.upperCase(); //'FOO BAR'

'foo-bar'.upperCaseFirst(); //'Foo-bar'
'foo_bar'.upperCaseFirst(); //'Foo_bar'
'Foo-Bar'.upperCaseFirst(); //'Foo-Bar'
'--foo.bar'.upperCaseFirst(); //'--foo.bar'
'__foo__bar__'.upperCaseFirst(); //'__foo__bar__'
'foo bar'.upperCaseFirst(); //'Foo bar'

```
