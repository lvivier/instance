# instance

Improved `instanceof`. Works the same, but also coerces primitives 
and compares their constructors.

## Install

With [npm](https://npmjs.org) or [component](https://github.com/component/component):

    $ npm install lvivier/instance
    $ component install lvivier/instance

## Usage

```js
var instance = require('instance')

'lol' instanceof String
// -> false

is('lol', String)
// -> true
```

## License

MIT
