# @eliaztray/del.js

[![NPM version](https://badgen.net/npm/v/@eliaztray/del.js)](https://npmjs.com/package/@eliaztray/del.js) [![NPM downloads](https://badgen.net/npm/dm/@eliaztray/del.js)](https://npmjs.com/package/@eliaztray/del.js) [![CircleCI](https://badgen.net/circleci/github/eliaztray/@eliaztray/del.js/master)](https://circleci.com/gh/eliaztray/@eliaztray/del.js/tree/master) [![codecov](https://codecov.io/gh/eliaztray/@eliaztray/del.js/branch/master/graph/badge.svg)](https://codecov.io/gh/eliaztray/@eliaztray/del.js)

## Install

```bash
yarn add @eliaztray/del.js
```

## Usage

```ts
const delJs = require('@eliaztray/del.js')

interface options extends globbyOptions {
  force?: boolean
}

delJs({})
//=> foo
```

```bash
del.js <glob pattern> [globbyOptions]

del.js . --force
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@eliaztray/del.js** © [eliaz](https://github.com/eliaztray), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by eliaz with help from contributors ([list](https://github.com/eliaztray/@eliaztray/del.js/contributors)).

> [github.com/eliaztray](https://github.com/eliaztray) · GitHub [@eliaz](https://github.com/eliaztray) · Twitter [@eliaztray](https://twitter.com/eliaztray)
