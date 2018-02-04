const common      = require('./common');
const changeCase  = require('change-case');

String.prototype.camelCase = function() {
  let str = common.validateString(this);
  return changeCase.camelCase(str);
};

String.prototype.constantCase = function() {
  let str = common.validateString(this);
  return changeCase.constantCase(str);
};

String.prototype.dotCase = function() {
  let str = common.validateString(this);
  return changeCase.dotCase(str);
};

String.prototype.headerCase = function() {
  let str = common.validateString(this);
  return changeCase.headerCase(str);
};

String.prototype.noCase = function() {
  let str = common.validateString(this);
  return changeCase.noCase(str);
};

String.prototype.paramCase = function() {
  let str = common.validateString(this);
  return changeCase.paramCase(str);
};

String.prototype.pascalCase = function() {
  let str = common.validateString(this);
  return changeCase.pascalCase(str);
};

String.prototype.pathCase = function() {
  let str = common.validateString(this);
  return changeCase.pathCase(str);
};

String.prototype.sentenceCase = function() {
  let str = common.validateString(this);
  return changeCase.sentenceCase(str);
};

String.prototype.snakeCase = function() {
  let str = common.validateString(this);
  return changeCase.snakeCase(str);
};

String.prototype.swapCase = function() {
  let str = common.validateString(this);
  return changeCase.swapCase(str);
};

String.prototype.titleCase = function() {
  let str = common.validateString(this);
  return changeCase.titleCase(str);
};

String.prototype.upperCase = function() {
  let str = common.validateString(this);
  return changeCase.upperCase(str);
};

String.prototype.lowerCase = function() {
  let str = common.validateString(this);
  return changeCase.lowerCase(str);
};

String.prototype.upperCaseFirst = function() {
  let str = common.validateString(this);
  return changeCase.upperCaseFirst(str);
};

String.prototype.lowerCaseFirst = function() {
  let str = common.validateString(this);
  return changeCase.lowerCaseFirst(str);
};
