# JS-Utility-Functions

[![NPM](https://nodei.co/npm/yancey-js-util.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/yancey-js-util/)

## Introduction

Collect the JavaScript utility functions in works. Continuous updating...

## Install

```bash
pnpm i yancey-js-util
```

## Function Lists

- getType([1, 2, 3]) => string

- formatJSONDate('2018-08-10T03:09:14.127086Z') => 2018-08-10 11:09:14

- deduplicateArray([4, 2, 2, 4, 1]) => [ 4, 2, 1 ]

- deduplicateObjectArray([{name: 'a'}, {name: 'b'}, {name: 'a'}]) => {name: 'a'}, {name: 'b'}]

- shuffle([1, 2, 3, 4, 5]) => [ 4, 2, 1, 5, 3 ]

- toThousands('1234567.85', '¥') => ¥1,234,567.85

- simpleToThousands(7654321.85, '¥') => ¥7,654,321.85

- capitalized('hello, world!') => Hello, World!

- getRandomInt(1, 10) => 6

- getRandomIntInclusive(1, 10) => 10

- deepFlatten(['a', ['b', 'c'], [['d', 'e']], ['f']]) => [ 'a', 'b', 'c', 'd', 'e', 'f' ]

- checkWebp() => true

- getFileExtension('sayaka.jpg') => jpg

- isValidIP('127.0.0.1') => true

- [{name: 'd'}, {name: 'v'}, {name: 'a'}].sort(sortBy('name')) => [{name: 'a'}, {name: 'd'}, {name: 'v'}]

- formatCookie(document.cookie)

- sleep(1000)

- randomColor() => #000000

- randomSeries(12, 36) => 7w1krvcf34l

- mongoObjectIdToTimestamp('5db957fa09843900107960ed') => 1572427770000

## License

JS-Tools is [MIT licensed](https://opensource.org/licenses/MIT).
