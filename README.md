### awesome-pretty
Group up all available pretty modules in one

### IMPORTANT
Big changes from last version, All functions are now nested in String,Number,Object except the Error

#### Install
```bash
npm install --save awesome-pretty
```

### TODO
- [x] Bytes
- [x] Millisecondes
- [x] Error
- [x] JSON
- [x] String
- [x] Currency
- [ ] Date
- [ ] Url
- [ ] Variable Name
- [ ] Phone Number

#### Use
```javascript
const awesome_pretty = require('awesome-pretty');
```

#### Bytes
```javascript

let size_in_bytes = 30000000; // Number
size_in_bytes.bytes();
// => '30 MB'

let size_in_human = '30 MB'; // String
size_in_human.bytes();
// => 30000000

```

#### Millisecondes
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

#### Error
```javascript
const awesome_pretty = require('awesome-pretty');
awesome_pretty.error(new Error('this is an error'));
// console.log it and you will have a beautiful Error
```

#### JSON
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

#### String
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
