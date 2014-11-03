# broccoli-metascript

[MetaScript](https://github.com/dcodeIO/MetaScript) filter for Broccoli.

## Installation

```bash
npm install --save-dev broccoli-metascript
```

## Usage

```js
var metascriptFilter = require('broccoli-metascript');
tree = metascriptFilter(tree, options);
```

### Options

The following options are supported:

* `scope` (passed through to MetaScript): Global defines for your script
