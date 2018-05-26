module.exports = {
    // recommended rules:
    // - https://github.com/vuejs/eslint-plugin-vue#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead
    "extends": [
        "plugin:vue/recommended"
    ],
    // required to lint *.vue files
    "plugins": [
        "vue"
    ],
    "rules": {
        // we must avoid "console" calls in the frontend context
        "no-console": "error",
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
        ],
    }
};
