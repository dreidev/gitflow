#! /usr/bin/env node
'use strict';
const program = require('commander');
const version = require('../package.json').version;

program
  .version(version)
  .command('bugfix [options]','Command wrapper for git flow bugfix').alias('b')
  .command('config [options]','Command wrapper for git flow config').alias('c')
  .command('feature [options]','Command wrapper for git flow feature',{isDefault: true}).alias('fwf')
  .command('hotfix [options]','Command wrapper for git flow hotfix').alias('h')
  .command('init [options]','Command wrapper for git flow init').alias('i')
  .command('log [options]','Command wrapper for git flow log').alias('l')
  .command('release [options]','Command wrapper for git release').alias('r')
  .command('support [options]','Command wrapper for git support').alias('s')
  .parse(process.argv);