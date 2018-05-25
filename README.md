# Code style

We're using `eslint` to enforce our common Javascript code style!

## Prerequisites

You'll need to use the `v4` at least.

## Installation

From the [official page](https://eslint.org/docs/developer-guide/shareable-configs):

```js
module.exports = {
    extends: [
        "nomadeducation",
        // the following rules are specific to our frontend code
        "nomadeducation/vue"
    ]
};
```
