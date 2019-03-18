const globby = require('globby')
const rimraf = require('rimraf')
const chalk = require('chalk')
/* const isPathCwd = require('is-path-cwd');
const isPathInCwd = require('is-path-in-cwd'); */

module.exports = function(input, options = {}) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be string')
  }

  const matchedFiles = getMatchFiles(input, options)
  const { dryrun, force } = options

  if (force) {
    matchedFiles.forEach(file => {
      rimraf.sync(file, { glob: false })
    })
  } else if (dryrun) {
    console.log(chalk.default.cyan('The following will be deleted'))
    matchedFiles.forEach(file => {
      console.log(chalk.default.redBright(file))
    })
    console.log(chalk.default.cyan('Please use --force to delete these files'))
  }
}

function getMatchFiles(path, options) {
  return globby.sync(path, {
    onlyFiles: options.f,
    onlyDirectories: options.d,
    ignore: options.ignore ? [].concat(options.ignore) : ['node_modules']
  })
}

/* function safeCheck(file) {
	if (isPathCwd(file)) {
		throw new Error('Cannot delete the current working directory. Can be overridden with the `force` option.');
	}

	if (!isPathInCwd(file)) {
		throw new Error('Cannot delete files/folders outside the current working directory. Can be overridden with the `force` option.');
	}
} */
