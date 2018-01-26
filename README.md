### awesome-pretty
Group up all available pretty modules in one

#### Install
```bash
npm install --save awesome-pretty
```

#### Use
```javascript
const awesome_pretty = require('awesome-pretty');
```

#### Bytes
```javascript
awesome_pretty.bytes(10)
// => '20 kB'
```

#### Millisecondes
```javascript
awesome_pretty.ms(1337000000)
// => '15d 11h 23m 20s'
```

#### Timestamp
```javascript
/*
  YYYY: full year (ex: 2017)
  MM: month (ex: 04)
  DD: day (ex: 01)
  HH: hours (ex: 12)
  mm: minutes (ex: 59)
  ss: seconds (ex: 09)
  ms: milliseconds (ex: 532)
*/

awesome_pretty.timestamp(1337000000)
// => '2012-05-14'

awesome_pretty.timestamp(1337000000,'DD/MM/YYYY')
// => '14/05/2012'

awesome_pretty.timestamp(1337000000,'YYYY')
// > '2012'
```

#### Error
```javascript
awesome_pretty.error(new Error('this is an error'));
// console.log it and you will have a beautiful Error
```

#### JSON
```javascript
const obj = {
  foo: 'bar',
  'arr': [1, 2, 3]
};
awesome_pretty.json(obj);
// console.log it and you will have a beautiful Stringified JSON
// More https://www.npmjs.com/package/stringify-object  
```

#### String
```javascript

awesome_pretty.string.camelize("Hey hOw_are-yoU");
// => 'heyHOwAreYoU'

awesome_pretty.string.capitalize("hey how are you")
// => 'Hey how are you'

awesome_pretty.string.capitalizeAll("hey how are you")
// => 'Hey How Are You'

awesome_pretty.string.humanize("heyHow_are-you");
// => 'Hey how are you'

awesome_pretty.string.latinise("Héy hôw äre you");
// => 'Hey how are you'

awesome_pretty.string.trim("  Hey   how \t  are \r\n\r\n   you");
// => 'Hey how are you'

awesome_pretty.string.escape("<span>Hey how are you</span>");
// => '&lt;span&gt;Hey how are you&lt;/span&gt;'

awesome_pretty.string.unescape("&lt;span&gt;Hey how are you&lt;/span&gt;");
// => '<span>Hey how are you</span>'

awesome_pretty.string.lines("Hey how\r\nare\nyou");
// => '   Hey how are you  '

awesome_pretty.string.pad("Hey how are you",20);
// => '  Hey'

awesome_pretty.string.padLeft("Hey");
// => '--Hey'

awesome_pretty.string.padLeft("Hey",10);
// => '       Hey'

awesome_pretty.string.padRight("Hey");
// => 'Hey  '

awesome_pretty.string.padRight("Hey",5,"-");
// => 'Hey--'

awesome_pretty.string.padRight("Hey",10);
// => 'Hey       '

awesome_pretty.string.truncate("Hey how are you",9);
// => 'Hey how a...'

awesome_pretty.string.truncate("Hey how are you",9,'---');
// => 'Hey how a---'

awesome_pretty.string.repeat('hey',3);
// => 'heyheyhey'

awesome_pretty.string.replace("Hey how are you","Hey","Lol");
// => 'Lol how are you'

awesome_pretty.string.replaceAll("Hey how hey you Hey","Hey","Lol");
// => 'Lol how hey you Lol'

awesome_pretty.string.slug("heyHow_are-you");
// => 'heyhow-are-you'

awesome_pretty.string.stripTags("<span>Hey how <strong>are</strong> you</span>");
// => 'Hey how are you'

awesome_pretty.string.stripTags("<span>Hey how <strong>are</strong> you</span>","strong");
// => '<span>Hey how are you</span>'

awesome_pretty.string.wrapHTML("Hey how are you");
// => '<span>Hey how are you</span>'

awesome_pretty.string.wrapHTML("Hey how are you","div");
// => '<div>Hey how are you</div>'

```

### TODO
- [x] Bytes
- [x] Millisecondes
- [x] Timestamp
- [x] Error
- [x] JSON
- [x] String
- [ ] Number
- [ ] Date
- [ ] Url
- [ ] Variable Name
- [ ] Phone Number
