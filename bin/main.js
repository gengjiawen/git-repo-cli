#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')

program
  .version(require('../package.json').version)
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called');
    download(
      source,
      destination,
      function (err) {
        console.log(err ? 'Error' : 'Success')
      }
    )
  })

program.parse(process.argv)
