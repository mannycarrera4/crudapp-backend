// const pug = require('pug')
// const pug = require('./index.pug')
// const pug = require('pug');
//
// const compiledFunction = pug.compileFile('index.pug');

// console.log(compiledFunction({
//   name: 'Timothy'
// }));
// const path = require('path')
// module.exports
// print(123)


const angular = require('angular');
const uiBootstrap = require('angular-ui-bootstrap');

const ngModule = angular.module('app', ['ui.bootstrap']);

require('./directives')(ngModule)
