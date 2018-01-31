const common          = require('./common');

const S               = require('string');
const camelcase       = require('camelcase');
const decamelize      = require('decamelize');
const humanizeString  = require('humanize-string');
const truncate        = require('truncate');


String.prototype.camelize = function(forceAllLowerCase = true) {
  let str = common.validateString(this);
  return camelcase(forceAllLowerCase ? str.toLowerCase() : str)
};
String.prototype.decamelize = function(char = '_') {
  let str = common.validateString(this);
  return decamelize(str,char);
};
String.prototype.capitalize = function() {
  let str = common.validateString(this);
  return S(str).capitalize().s
};
String.prototype.capitalizeAll = function() {
  let str = common.validateString(this);
  return S(str).titleCase().s
};
String.prototype.humanize = function() {
  let str = common.validateString(this);
  return humanizeString(str)
};
String.prototype.latinise = function() {
  let str = common.validateString(this);
  return S(str).latinise().s
};
String.prototype.trim = function() {
  let str = common.validateString(this);
  return S(str).collapseWhitespace().s
};
String.prototype.escape = function() {
  let str = common.validateString(this);
  return S(str).escapeHTML().s
};
String.prototype.unescape = function() {
  let str = common.validateString(this);
  return S(str).unescapeHTML().s
};
String.prototype.lines = function() {
  let str = common.validateString(this);
  return S(str).lines()
};
String.prototype.pad = function( length = 5) {
  let str = common.validateString(this);
  return S(str).pad(length).s
};
String.prototype.padLeft = function( length = 5, char = ' ') {
  let str = common.validateString(this);
  return S(str).padLeft(length, char).s
};
String.prototype.padRight = function( length = 5, char = ' ') {
  let str = common.validateString(this);
  return S(str).padRight(length, char).s
};
String.prototype.truncate = function(length = 5,char = "...") {
  let str = common.validateString(this);
  return truncate(str,length,{ellipsis:char})
};
String.prototype.repeat = function(length) {
  let str = common.validateString(this);
  return S(str).repeat(length).s
};
String.prototype.replaceAll = function(oldStr,newStr) {
  let str = common.validateString(this);
  return S(str).replaceAll(oldStr, newStr).s
};
String.prototype.slug = function() {
  let str = common.validateString(this);
  return S(str).slugify().s
};
String.prototype.stripTags = function(tag) {
  let str = common.validateString(this);
  if(tag)
    return S(str).stripTags(tag).s
  else
    return S(str).stripTags().s
};
String.prototype.wrapHTML = function(tag = "span") {
  let str = common.validateString(this);
  return S(str).wrapHTML(tag).s
};

String.prototype.pretty = function() {
  let str = common.validateString(this);
  return str.slug().humanize().capitalize()
};

String.prototype.toJson = function() {
  let str = common.validateString(this);
  return JSON.parse(str);
};
