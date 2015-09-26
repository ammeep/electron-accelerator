'use strict'
var colors, argv, prompt, templateWriter, writeOpening, writeClosing;

colors = require('colors');
argv = require('yargs').argv;
prompt = require('./prompt');
templateWriter = require('./template-writer');

writeOpening = function(){
  console.log();
  console.log('---------------------------------------------------------------\n'.rainbow);
  console.log('Hello Human\n');
  console.log('I\'d like to help you get started with your electron app\n');
  console.log('First, I\'ll ask you a few questions');
  console.log('And then I\'ll create a template that suits your needs\n');
};

writeClosing = function(){
  console.log();
  console.log('Your electron app is ready to go!\n');
  console.log('To boostrap your application run \'script\/bootstrap\'');
  console.log('Be sure to check out your projects readme.md for more information\n');
  console.log('Good luck!\n');
  console.log('---------------------------------------------------------------\n'.rainbow);
};

module.exports = function(callback){

  writeOpening();

  prompt(function(err, result){
    if (err) return callback(1);
    templateWriter.copyTempateWithResult(result, function(){
      writeClosing();
      callback(0);
    });
  });
};
