const path = require('path')
const tempy = require('tempy')
const del = require('..')
const fs = require('fs-extra')
const execa = require('execa')
const mkdir = require('make-dir')
const globby = require('globby')

const DIR = tempy.directory()

const fixtures = ['1.tmp', '2.tmp', '3.tmp', '1tmp', '2tmp', '3tmp']

beforeEach(() => {
  for (const fixture of fixtures) {
    try {
      if (fixture.includes('.')) {
        const parentDir = path.parse(path.join(DIR, fixture)).dir
        mkdir.sync(parentDir)
        fs.writeFileSync(path.join(DIR, fixture))
      } else {
        mkdir.sync(path.join(DIR, fixture))
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
})

test('main', () => {
  expect(typeof del).toBe('function')
})

test('show files will be deleted match the path without --force', async () => {
  await execa('./cli.js', [DIR])
  expect(globby.sync(DIR, { onlyFiles: false }).sort()).toEqual(
    fixtures.map(paths => path.join(DIR, paths)).sort()
  )
})

test('delete files match the path with --force', async () => {
  await execa('./cli.js', [DIR, '--force'])
  expect(globby.sync(DIR, { onlyFiles: false }).sort()).toEqual([])
})
