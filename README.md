### awesome-pretty
Group up all available pretty modules in one

#### Install
```bash
npm install --save awesome-pretty
```

#### Bytes
```javascript
const awesome_pretty = require('awesome-pretty');
awesome_pretty.bytes(10)
// 20 kB
```

#### Millisecondes
```javascript
const awesome_pretty = require('awesome-pretty');
awesome_pretty.ms(1337000000)
// 15d 11h 23m 20s
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

const awesome_pretty = require('awesome-pretty');
awesome_pretty.timestamp(1337000000)
// 2012-05-14

awesome_pretty.timestamp(1337000000,'DD/MM/YYYY')
// 14/05/2012

awesome_pretty.timestamp(1337000000,'YYYY')
// 2012
```

#### Error
```javascript
const awesome_pretty = require('awesome-pretty');
awesome_pretty.error(new Error('this is an error'));
// console.log it and you will have a beautiful Error
```

#### JSON
```javascript
const awesome_pretty = require('awesome-pretty');
const obj = {
  foo: 'bar',
  'arr': [1, 2, 3]
};
awesome_pretty.json(obj);
// console.log it and you will have a beautiful Stringified JSON
// More https://www.npmjs.com/package/stringify-object  
```


### TODO
- [x] Bytes
- [x] Millisecondes
- [x] Timestamp
- [x] Error
- [x] JSON
- [ ] String
- [ ] Number
- [ ] Date
- [ ] Url
- [ ] Variable Name
- [ ] Phone Number
