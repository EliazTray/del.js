#!/usr/bin/env node
'use strict'
const cac = require('cac')
const { version } = require('./package.json')
const del = require('.')

const cli = cac()

cli
  .command('<file path>', 'specify path to remove')
  .option('--force', 'only setted to true, the matched files will be deleted')
  .allowUnknownOptions()
  .action((path, options) => {
    del(path, options)
  })

cli.help()
cli.version(version)
cli.parse()
