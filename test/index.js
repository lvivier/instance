
var assert = require('assert')
var is = require('..')

// fixtures
function Animal () {}
function Cat () {}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

var f = new Cat('test')
var e = new Error('test')

// strings
assert(is('test', String))
assert(!is('test', Object))

// numbers
assert(is(3, Number))
assert(is(Infinity, Number))
assert(!is('3', Number))
assert(!is(3, Object))

// booleans
assert(is(true, Boolean))
assert(is(false, Boolean))
assert(!is(false, Object))

// dates
assert(is(new Date(), Date))

// regexps
assert(is(/lol/, RegExp))
assert(!is('/lol/', RegExp))

// arrays
assert(is([], Array))

// objects
assert(is({}, Object))

// errors
assert(is(e, Error))
assert(is(e, Object))

// user types
assert(is(f, Cat))

// walks up prototype chain
assert(is(f, Animal))
assert(is(f, Object))
