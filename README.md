### awsome-pretty
Group up all available pretty modules in one

#### Install
```bash
npm install --save awsome-pretty
```

#### Bytes
```javascript
const pretty = require('awsome-pretty');
pretty.bytes(10)
// 20 kB
```

#### Millisecondes
```javascript
const pretty = require('awsome-pretty');
pretty.ms(1337000000)
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

const pretty = require('awsome-pretty');
pretty.timestamp(1337000000)
// 2012-05-14

pretty.timestamp(1337000000,'DD/MM/YYYY')
// 14/05/2012

pretty.timestamp(1337000000,'YYYY')
// 2012
```

#### Error
```javascript
const pretty = require('awsome-pretty');
pretty.error(new Error('this is an error'));
// console.log it and you will have a beautiful Error
```

#### JSON
```javascript
const pretty = require('awsome-pretty');
const obj = {
  foo: 'bar',
  'arr': [1, 2, 3]
};
pretty.json(obj);
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
