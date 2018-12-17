# Nomad Education Code style

We're using `eslint` to enforce a common Javascript style to our code.

## Installation

From the [official page](https://eslint.org/docs/developer-guide/shareable-configs), use the `extends` property in your `.eslintrc` file:

```js
module.exports = {
    extends: "nomadeducation"
};
```

The following rules are specific to our frontend code.

```js
module.exports = {
    extends: [
        "nomadeducation",
        "nomadeducation/frontend"
    ]
};
```

Keep in mind that you'll also have to **install** the "vue" plugin since shareable config cannot [import their own plugin](https://github.com/eslint/eslint/issues/3458) yet:

```bash
yarn add --dev eslint-plugin-vue
```
