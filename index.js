const globby = require('globby')
const rimraf = require('rimraf')
const chalk = require('chalk')

module.exports = function(input, options = {}) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be string')
  }

  console.log(options, 'options')

  const matchedFiles = getMatchFiles(input, options)
  const { force } = options

  if (force) {
    matchedFiles.forEach(file => {
      rimraf.sync(file, { glob: false })
    })
  } else {
    console.log(chalk.default.cyan('The following will be deleted'))
    matchedFiles.forEach(file => {
      console.log(chalk.default.redBright(file))
    })
    console.log(chalk.default.cyan('Please use --force to delete these files'))
  }
}

function getMatchFiles(path, options) {
  // if not set, set "falsy"
  return globby.sync(path, {
    ...options,
    onlyDirectories: options.onlyDirectories,
    onlyFiles: options.onlyFiles
  })
}
