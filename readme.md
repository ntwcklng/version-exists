# version-exists [![Build Status](https://travis-ci.org/ntwcklng/version-exists.svg?branch=master)](https://travis-ci.org/ntwcklng/version-exists)

> Check if a version for a NPM modul exists.


## Install

```
$ npm install --save version-exists
```


## Usage

```js
const versionExists = require('version-exists')

versionExists('args', '2.6.0').then(exists => console.log(exists)) //=> true
versionExists('args', '99.6.0').then(exists => console.log(exists)) //=> false
versionExists('argsfkgmnghjghjrihgjkrg', '2.6.0').then(exists => console.log(exists)) //=> Error > Cannot find argsfkgmnghjghjrihgjkrg in the NPM registry

```

## API

### versionExists(module, version)

Returns a promise for a boolean.

#### module

Type: `String`

Module to check.

#### version

Type: `String`

Version you want to check.

## CLI

### Install

```
$ npm install -g version-exists
```

```sh
❯ version-exists args 2.6.0

    Version 2.6.0 of the module args exist!
  

❯ version-exists args 99.6.0

    Version 99.6.0 of the module args does not exist!
  

❯ version-exists arsdgfghdhtdhtzjnrzjnrzjrjgs 2.6.0

    Error > Cannot find arsdgfghdhtdhtzjnrzjnrzjrjgs in the NPM registry

```

## License

MIT © [Marvin Mieth](https://ntwcklng.now.sh)
