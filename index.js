module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    // recommended rules:
    // - http://eslint.org/docs/rules
    "extends": "eslint:recommended",
    "rules": {
        //
        // node.js
        //
        "no-sync": "error",
        "no-buffer-constructor": "error",
        "no-path-concat": "error",
        // we relax this rule since we're in a server context
        "no-console": "off",
        //
        // general
        //
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "MemberExpression": 0,
                "FunctionDeclaration": {"parameters": 1},
                "FunctionExpression": {"parameters": 1},
                "CallExpression": {"arguments": 1}
            }
        ],
        "no-tabs": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "max-len": [
            "warn",
            {
                "code": 120,
                "ignoreComments": true,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "quotes": [
            "error",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        // the following rule will force the trailing line break
        // at the end of a file (the editor config isn't working sometimes)
        "eol-last": [
            "error",
            "always"
        ],
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-extra-parens": "error",
        "new-parens": "error",
        "object-property-newline": "error",
        "object-curly-newline": [
            "error",
            {
                "consistent": true
            }
        ],
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-element-newline": [
            "error",
            {
                "multiline": true,
                "minItems": 2
            }
        ],
        "operator-linebreak": [
            "error",
            "after"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "no-caller": "error",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "no-template-curly-in-string": "error",
        "valid-jsdoc": [
            "error",
            {
                "prefer": {
                    "arg": "param",
                    "argument": "param",
                    "class": "constructor",
                    "return": "returns",
                    "virtual": "abstract"
                },
                "preferType": {
                    "boolean": "Boolean",
                    "number": "Number",
                    "string": "String"
                },
                "requireParamDescription": false,
                "requireReturnDescription": false,
                "requireReturn": false
            }
        ],
        "block-scoped-var": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implicit-coercion": "error",
        "no-new-wrappers": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-self-compare": "error",
        "no-throw-literal": "error",
        "no-useless-concat": "error",
        "no-with": "error",
        "no-undefined": "error",
        "no-nested-ternary": "error",
        "no-lonely-if": "error",
        "no-multi-assign": "error",
        "no-new-symbol": "error",
        "no-var": "error",
        "prefer-const": "warn",
        "prefer-template": "warn",
        "prefer-promise-reject-errors": [
            "error",
            {
                "allowEmptyReject": true
            }
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "space-infix-ops": "error",
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "generator-star-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "yield-star-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "switch-colon-spacing": "error",
        "template-tag-spacing": "error",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        "block-spacing": "error",
        "camelcase": [
            "error",
            {
                "properties": "never"
            }
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "radix": "error",
        "require-await": "error"
    }
};
