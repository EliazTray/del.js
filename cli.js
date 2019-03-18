#!/usr/bin/env node
'use strict'
const cac = require('cac')
const { version } = require('./package.json')
const main = require('.')

const cli = cac()

cli
  .command('<file path>', 'specify path to remove')
  .option('-f', 'Only remove file not directory')
  .option('-d', 'Only remove directories not file')
  .option('--dryrun', 'see what would be deleted', { default: true })
  .option('--force', 'only setted to true, the matched files will be deleted')
  .option('--ignore <ignore pattern>', 'ignore the files matched pattern')
  .action((path, options) => {
    main(path, options)
  })

cli.help()
cli.version(version)
cli.parse()
