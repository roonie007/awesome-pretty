const prettyBytes = require('pretty-bytes');
const prettyMs    = require('pretty-ms');
const timestamp   = require('./lib/pretty-timestamp');

const PrettyError = require('pretty-error');
let pe = new PrettyError();

const stringifyObject = require('stringify-object');

const S = require('string');
const camelcase = require('camelcase');
const decamelize = require('decamelize');
const humanizeString = require('humanize-string');
const truncate = require('truncate');

const awesome_pretty = {
  bytes: prettyBytes,
  ms: prettyMs,
  timestamp: timestamp,
  error: (error) => {
    return pe.render(error)
  },
  json: stringifyObject,
  string : {
    camelize: (str,forceAllLowerCase = true) => {
      return camelcase(forceAllLowerCase ? str.toLowerCase() : str)
    },
    decamelize: decamelize,
    capitalize: (str) => {
      return S(str).capitalize().s
    },
    capitalizeAll: (str) => {
      return S(str).titleCase().s
    },
    humanize: humanizeString,
    latinise: (str) => {
      return S(str).latinise().s
    },
    trim: (str) => {
      return S(str).collapseWhitespace().s
    },
    escape: (str) => {
      return S(str).escapeHTML().s
    },
    unescape: (str) => {
      return S(str).unescapeHTML().s
    },
    lines: (str) => {
      return S(str).lines()
    },
    pad: (str, length = 5) => {
      return S(str).pad(length).s
    },
    padLeft: (str, length = 5, char = ' ') => {
      return S(str).padLeft(length, char).s
    },
    padRight: (str, length = 5, char = ' ') => {
      return S(str).padRight(length, char).s
    },
    truncate: (str,length = 5,char = "...") => {
      return truncate(str,length,{ellipsis:char})
    },
    repeat: (str,length) => {
      return S(str).repeat(length).s
    },
    replace: (str,oldStr,newStr) => {
      return str.replace(oldStr, newStr)
    },
    replaceAll: (str,oldStr,newStr) => {
      return S(str).replaceAll(oldStr, newStr).s
    },
    slug: (str) => {
      return S(str).slugify().s
    },
    stripTags: (str,tag) => {
      if(tag)
        return S(str).stripTags(tag).s
      else
        return S(str).stripTags().s
    },
    wrapHTML: (str,tag = "span") => {
      return S(str).wrapHTML(tag).s
    }
  }
};

module.exports = awesome_pretty;
