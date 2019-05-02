module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      2,
      2,
      {
          "SwitchCase": 1
      }
    ],
    "linebreak-style": 0,
    "quotes": [
      2,
      "double"
    ],
    "semi": [
      2,
      "always"
    ],
    "curly": [
      2,
      "all"
    ],
    "camelcase": [
      2,
      {
        "properties": "always"
      }
    ],
    "eqeqeq": [
      2,
      "smart"
    ],
    "one-var-declaration-per-line": [
      2,
      "always"
    ],
    "new-cap": 2,
    "no-case-declarations": 0
  }
};