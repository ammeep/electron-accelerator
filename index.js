#!/usr/bin/env node
var colors = require('colors');
var argv = require('yargs').argv;
var fs = require('fs');
var accelerator = require('./electron-accelerator');

if (argv.version || argv.v) {
   var packageFile = require('./package.json');
   console.log(packageFile.name + '@' + packageFile.version);
   process.exit();
}

if (argv.help || argv.h) {
   var data = fs.readFileSync('./usage.txt', 'utf8');
   console.log(data);
   process.exit();
}

accelerator(function(code){
  console.log();// empty space to terminate after a new line
  process.exit(code)
});
