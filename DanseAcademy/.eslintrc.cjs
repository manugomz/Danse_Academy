module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "plugins": ["react", "react-hooks"],
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "rules": {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "warn",
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "space-infix-ops": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": "error",
      "arrow-spacing": "error",
      "no-multi-spaces": "error",
      "block-spacing": "error",
      "space-in-parens": ["error", "never"],
      "comma-style": ["error", "last"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  }  
}
