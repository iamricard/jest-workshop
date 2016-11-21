---
title: Testing in Javascript
author: @rcsole
---

Why Jest
==============

Jest is, like mocha for example, a test framework. It is developed and used by
Facebook both in Open Source and internal projects. Similar projects include
`mocha` and `ava`.

Benefits of using Jest
----------------------

- Seamless integration with `babel`
- Has built-in watch mode
- Integrated with `istanbul` for test coverage
- Easy function mocks
- Includes `jsdom`
- Snapshot testing!

---

Syntax
======

Basic expectations
------------------

```javascript
// foo.js
export default function foo () {
  return 'beep'
}

// __tests__/foo-test.js
import foo from '../foo'

test('tests something', () => { // Notice the amazing ES6 syntax WOW
  expect(foo()).toEqual(true) // Passes: test equality, `==`
  expect(foo()).toBe(true)    // Doesn't pass: test strict equality, `===`
})

test('contains beep', () => {
  expect(foo()).toMatch(/beep/)
})
```

---

Syntax
======

Mocked functions
----------------

```javascript
// bar.js
export default function bar (cb) {
  cb('boop')
}

// __tests__/bar-test.js
import bar from '../bar'

test('tests something else', () => {
  const cb = jest.fn()

  bar(cb)

  expect(cb).toHaveBeenCalled()
  expect(cb).toHaveBeenCalledTimes(1)
  expect(cb).toHaveBeenCalledWith('boop')
})
```

---

Up and running
==============

Without babel
-------------

Setting up Jest is the simplest part, like it should be! You don't even need
`babel` to begin!

```bash
npm i jest -D

echo "module.exports = function (a, b) { return a + b }" > sum.js

mkdir __tests__

cat >__tests__/sum-test.js<<EOL
test('adds 1 + 2 to equal 3', function () {
  const sum = require('../sum')
  expect(sum(1, 2)).toBe(3)
})
EOL

./node_modules/jest/bin/jest.js
# or add "test": "jest" to your package.json scripts
```

---

Up and running
==============

Adding babel
------------

Simple as using `babel` or `webpack`! Jest will find a `.babelrc` file and use
that as configuration. Quick reminder of how that could look:

```bash
npm i babel-jest babel-preset-es2015 -D

echo '{ "presets": ["es2015"] }' > .babelrc
```

Now try changing the previous tests into ES6 arrow syntax.
They should _Just Work™_.

---

Coding time!
============

```bash
cd $HOME/your-workspace-folder

git clone https://github.com/rcsole/jest-workshop.git

./next-step.sh
```
