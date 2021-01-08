# URL related functions

# Install
```
npm i @appres/url
```

## Import
```
const URL = require('@appres/url');

or

import { URL } from '@appres/url';

```

## Usage
```
let encoded = URL.encode("https://abc.com/123?a=value&b=value");
let decoded1 = URL.decode("https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue");
let decoded2 = URL.decode("https%3A%2F%2Fabc.com%2F123%3Fa%3Dvalue%26b%3Dvalue");

console.log("encoded=" + encoded);
console.log("decoded1=" + decoded1);
console.log("decoded2=" + decoded2);


result:

encoded=https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue
decoded1=https://abc.com/123?a=value&b=value
decoded2=https://abc.com/123?a=value&b=value

```

