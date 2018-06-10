# bugshr.js ![Browserify Badge](https://img.shields.io/badge/supports-browserify-blue.svg) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
JS library for making bugshr URLs.

## Installation

```
npm install --save bugshr
```

## Usage

```js
var bugshr = require('bugshr');

console.log(bugshr("Data in string format.")); // https://bugshr.github.io/?data=RGF0YSBpbiBzdHJpbmcgZm9ybWF0Lg%3D%3D
```