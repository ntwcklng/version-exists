const npmName = require('npm-name')
const fetch = require('node-fetch')
const chalk = require('chalk')

module.exports = (module, version) => new Promise((resolve, reject) => {
  // Npm-name checks if the name of the module is available
  return npmName(module).then(isNoValid => {
    if (isNoValid) throw new Error(`${chalk.red(`Error >`)} Cannot find ${chalk.underline(module)} in the NPM registry`)

    fetch(`http://registry.npmjs.org/${module}`)
    .then(res => res.json())
    .then(body => {
      return resolve({}.hasOwnProperty.call(body.time, version))
    })

  }).catch(err => reject(err.message))
})
