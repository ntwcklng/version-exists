#!/usr/bin/env node

const args = require('args')
const chalk = require('chalk')
const versionExists = require('../')

args
  .example('version-exists args 2.6.0', 'Check if Version 2.6.0 of the NPM module args exists')

args.parse(process.argv)

if (!args.sub[1]) {
  console.log(`Please specify a version`)
  args.showHelp()
}

versionExists(args.sub[0], args.sub[1]).then(exists => {
  console.log(`
    Version ${chalk.blue(args.sub[1])} of the module ${chalk.blue(args.sub[0])} ${exists ? chalk.green('exist') : chalk.red('does not exist') }!
  `)
}).catch(err => console.log(err))
