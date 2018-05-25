module.exports = {
    // recommended rules:
    // - http://eslint.org/docs/rules
    "extends": [
        "eslint:recommended",
    ],
    "rules": {
        //
        // general style guide
        //
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "MemberExpression": 0,
                "FunctionDeclaration": {
                    "parameters": 1
                },
                "FunctionExpression": {
                    "parameters": 1
                },
                "CallExpression": {
                    "arguments": 1
                }
            }
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
        "newline-per-chained-call": [
            "warn",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "object-property-newline": "error",
        "object-curly-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        "array-bracket-newline": [
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
        "valid-jsdoc": ["error", {
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
        }],
        "block-scoped-var": "error",
        // we relax this rule since we're in a server context
        "no-console": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-multi-spaces": "error",
        "no-with": "error",
        "no-undefined": "error",
        "no-sync": "error",
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
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
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
            "always-multiline"
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
        "no-nested-ternary": "error",
        "no-new-symbol": "error",
        "no-var": "error",
        "prefer-const": "warn",
        "prefer-template": "warn",
        "radix": "error",
    }
};