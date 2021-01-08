'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var UrlEx = /** @class */ (function () {
  
  function UrlEx() {
  }
  
  function _isString(s) {
    return (typeof s === 'string' || s instanceof String);
  }

  function _encode (url = '') {
    if (!_isString(url)) {
      throw new Error('Invalid');
    }
    
    return encodeURIComponent(url)
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      .replace(/%3A/g, ':')
      .replace(/%2F/g, '/')
      .replace(/%20/g, '+');
  }
      
  function _decode (encoded = '') {
    if (!_isString(encoded)) {
      throw new Error('Invalid');
    }
    return decodeURIComponent((encoded)
      .replace(/\+/g, '%20'));
  }

  UrlEx.prototype.encode = function(url){
    return _encode(url);
  };
  UrlEx.prototype.decode = function(encoded){
    return _decode(encoded);
  };

  UrlEx.urlex = new UrlEx();
  UrlEx.encode = function(url) {
    return this.urlex.encode(url);
  };
  UrlEx.decode = function(encoded) {
    return this.urlex.decode(encoded);
  };

  return UrlEx;
}());

module.exports = UrlEx;
module.exports.UrlEx = UrlEx;

/*
// Samples
let encoded = UrlEx.encode("https://abc.com/123?a=value&b=value");
let decoded1 = UrlEx.decode("https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue");
let decoded2 = UrlEx.decode("https%3A%2F%2Fabc.com%2F123%3Fa%3Dvalue%26b%3Dvalue");

console.log("encoded=" + encoded);
console.log("decoded1=" + decoded1);
console.log("decoded2=" + decoded2);
*/