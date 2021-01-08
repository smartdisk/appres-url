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
let encoded1 = UrlEx.encode("https://abc.com/123?a=value&b=value");
let encoded2 = UrlEx.encodeComp("https://abc.com/123?a=value&b=value");
let decoded1 = UrlEx.decode("https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue");
let decoded2 = UrlEx.decode("https%3A%2F%2Fabc.com%2F123%3Fa%3Dvalue%26b%3Dvalue");

result:

encoded1=https://abc.com/123%3Fa%3Dvalue%26b%3Dvalue
encoded2=https%3A%2F%2Fabc.com%2F123%3Fa%3Dvalue%26b%3Dvalue
decoded1=https://abc.com/123?a=value&b=value
decoded2=https://abc.com/123?a=value&b=value

```

