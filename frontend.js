module.exports = {
    "parserOptions": {
        "sourceType": "module"
    },
    // recommended rules:
    // - https://github.com/vuejs/eslint-plugin-vue#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead
    "extends": "plugin:vue/recommended",
    // required to lint *.vue files
    "plugins": ["vue"],
    "rules": {
        //
        // browser
        //
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        // we must avoid "console" calls in the frontend context
        "no-console": "error",
        "no-script-url": "error",
        //
        // vue.js
        //
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/script-indent": [
            "error",
            4,
            {
                "switchCase": 1
            }
        ]
    }
};
