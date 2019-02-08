# String interpolation on objects
While iterating trough on an object or array, it replaces the marked parts of each member with values from a given set.

## Installation
```
npm install --save interpolate-object
```

## Usage
```js
const interpolate = require("interpolate-object");

const messages = {
    greetings: "Hello {{ name.first }}!",
    goodbye: "Goodbye {{ name.first }}."
};
const data = { name: { first: "John", last: "Doe" }};

const result = interpolate(messages, data);

console.log(result); // { greetings: "Hello John!", goodbye: "Goodbye John." }
console.log(messages); // { greetings: "Hello ${name.first}!", goodbye: "Goodbye ${name.first}." }
```

Alternatively you can also specify a pattern for the replacement format:

```js
const interpolate = require("interpolate-object");

const messages = {
    greetings: "Hello ${name.first}!",
    goodbye: "Goodbye ${name.first}."
};
const pattern = /\$\{(.+?)\}/g;
const data = { name: { first: "John", last: "Doe" }};

const result = interpolate(messages, data, pattern);

console.log(result); // { greetings: "Hello John!", goodbye: "Goodbye John." }
console.log(messages); // { greetings: "Hello ${name.first}!", goodbye: "Goodbye ${name.first}." }
```

Interpolation also works on `Array` and `string` types:

```js
const interpolate = require("interpolate-object");

const messages = [
    "Hello {{ name.first }}!",
    "Goodbye {{ name.first }}."
];
const data = { name: { first: "John", last: "Doe" }};

const result1 = interpolate(messages, data, pattern);
const result2 = interpolate(messages[0], data, pattern);

console.log(result1); // [ "Hello John!", "Goodbye John." ]
console.log(result2); // "Hello John!"
console.log(messages); // [ "Hello ${name.first}!", "Goodbye ${name.first}." ]
```

### Notes
 - As seen in the example above, the original `messages` object will not be modified. Everytime a new copy will be returned.
