module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
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
        // limit the usage of "console" calls
        "no-console": [
            "error",
            {
                allow: [
                    "warn",
                    "error"
                ]
            }
        ],
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
