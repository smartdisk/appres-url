# URL related functions

# Install
```
npm i @appres/url
```

## Import
```
const UrlEx = require('@appres/url');

or

import { UrlEx } from '@appres/url';

```

## Usage
```
let encoded = UrlEx.encode("https://abc.com/123?a=value&b=value");
let decoded1 = UrlEx.decode("https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue");
let decoded2 = UrlEx.decode("https%3A%2F%2Fabc.com%2F123%3Fa%3Dvalue%26b%3Dvalue");

console.log("encoded=" + encoded);
console.log("decoded1=" + decoded1);
console.log("decoded2=" + decoded2);


result:

encoded=https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue
decoded1=https://abc.com/123?a=value&b=value
decoded2=https://abc.com/123?a=value&b=value

```

