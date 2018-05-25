# Nomad Education Code style

We're using `eslint` to enforce a common Javascript style to our code.

## Prerequisites

You'll need to use at least the version **4** of `eslint`.

## Installation

From the [official page](https://eslint.org/docs/developer-guide/shareable-configs), use the `extends` property in your `.eslintrc` file:

```js
module.exports = {
    extends: [
        "nomadeducation",
        // the following rules are specific to our frontend code
        "nomadeducation/vue"
    ]
};
```
