module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-useless-concat": [ "error" ],
        "prefer-template": [ "error" ],
        "no-template-curly-in-string": [ "error" ],
        "no-extra-parens": [ "error" ],
        "strict": [ "error" ],
        "no-iterator": [ "error" ],
        "no-with": [ "error" ],
        "no-trailing-spaces": [ "error" ],
        "eqeqeq": [ "error", "always" ],
        "indent": [ "error", 4 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "no-console": 0,
        "no-var": [ "error" ],
        "prefer-const": [
            "error",
            { "destructuring": "any", "ignoreReadBeforeAssign": false }
        ]
    }
};
