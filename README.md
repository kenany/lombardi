# lombardi

[Lombardi's formula][1] for one-repetition maximum.

## Example

``` javascript
var lombardi = require('lombardi');

lombardi(100, 10);
// => 125
```

## Installation

``` bash
$ npm install lombardi
```

## API

``` javascript
var lombardi = require('lombardi');
```

### `lombardi(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns the one-repetition maximum
from Lombardi's formula as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Lombardi
