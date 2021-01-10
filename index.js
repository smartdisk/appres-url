'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var UrlEx = /** @class */ (function () {
  
  function UrlEx() {
  }
  
  function _isString(s) {
    if(s==null) return false;
    return (typeof s === 'string' || s instanceof String);
  }
  function _isArray(s) {
    if(s==null) return false;
    return (s instanceof Array);
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
  function _encodeComp (url = '') {
    if (!_isString(url)) {
      throw new Error('Invalid');
    }    
    return encodeURIComponent(url)
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      .replace(/%20/g, '+');
  }

  function _decode (encoded = '') {
    if (!_isString(encoded)) {
      throw new Error('Invalid');
    }
    return decodeURIComponent((encoded)
      .replace(/\+/g, '%20'));
  }

  function _checkURL (url, protocol = null) {
    try {
      url = new URL(url);
    } catch (_) {
      return null;  
    }
    if(protocol) {
      if(_isString(protocol)) {
        return (url.protocol === protocol || url.protocol === (protocol+":")) ? url : null;
      } else
      if(_isArray(protocol)) {
        for(let i=0;i<protocol.length;i++) {
          if(url.protocol === protocol[i] || url.protocol === (protocol[i]+":")) return url;
        }
      }
      return null;
    }
    return url;
  }
  
  UrlEx.prototype.encode = function(url){
    return _encode(url);
  };
  UrlEx.prototype.encodeComp = function(url){
    return _encodeComp(url);
  };
  UrlEx.prototype.decode = function(encoded){
    return _decode(encoded);
  };
  UrlEx.prototype.checkURL = function(url, protocol=null){
    return _checkURL(url, protocol);
  };

  UrlEx.urlex = new UrlEx();
  UrlEx.encode = function(url) {
    return this.urlex.encode(url);
  };
  UrlEx.encodeComp = function(url) {
    return this.urlex.encodeComp(url);
  };
  UrlEx.decode = function(encoded) {
    return this.urlex.decode(encoded);
  };
  UrlEx.checkURL = function(url, protocol=null) {
    return this.urlex.checkURL(url, protocol);
  };

  return UrlEx;
}());

module.exports = UrlEx;
module.exports.UrlEx = UrlEx;


/*
// Samples
let encoded1 = UrlEx.encode("https://abc.com/123?a=value&b=value");
let encoded2 = UrlEx.encodeComp("https://abc.com/123?a=value&b=value");
let decoded1 = UrlEx.decode("https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue");
let decoded2 = UrlEx.decode("https%3A%2F%2Fabc.com%2F123%3Fa%3Dvalue%26b%3Dvalue");

console.log("encoded1=" + encoded1);
console.log("encoded2=" + encoded2);
console.log("decoded1=" + decoded1);
console.log("decoded2=" + decoded2);

let url1 = UrlEx.checkURL("http://www.google.co.kr/test");
let url2 = UrlEx.checkURL("http://www.google.co.kr/test", "https");
let url3 = UrlEx.checkURL("http://www.google.co.kr/test", ["http", "https", "ftp", "ftps"]);
let url4 = UrlEx.checkURL("http://www.google.co.kr/test", ["ftp", "ftps"]);

console.log("url1=" + url1);
console.log("url2=" + url2);
console.log("url3=" + url3);
console.log("url4=" + url4);
*/