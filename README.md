# [EVA] Personal ESLint config

Extends Airbnb's [base config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## Differences from Airbnb's base config

### operator-linebreak
```javascript
'operator-linebreak': ['warn', 'before', {
  overrides: {
    '=': 'none',
    '?': 'after',
    ':': 'after',
  },
}]
```

### no-debugger
Allow the use of `debugger` when in development.
```javascript
'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off'
```

### no-param-reassign
Added `state` and `el` for vue-router and adjusting html elements
```javascript
'no-param-reassign': ['error', {
  props: true,
  ignorePropertyModificationsFor: [
    'state', // for vuex state
    'acc', // for reduce accumulators
    'accumulator', // for reduce accumulators
    'e', // for e.returnvalue
    'ctx', // for Koa routing
    'req', // for Express requests
    'request', // for Express requests
    'res', // for Express responses
    'response', // for Express responses
    '$scope', // for Angular 1 scopes
    'el', // for el.style
  ],
}]
```

### no-unused-expressions
```javascript
'no-unused-expressions': ['error', {
  allowShortCircuit: true,
  allowTernary: false,
  allowTaggedTemplates: false,
}]
```

### import/prefer-default-export
```javascript
'import/prefer-default-export': 'off'
```

### require-atomic-updates
Not yet enabled in Airbnb's base config
```javascript
'require-atomic-updates': 'error'
```

## Install

```bash
$ npm install -D eslint @ascendancyy/eslint-config-eva
```

or  

```bash
$ yarn add -D eslint @ascendancyy/eslint-config-eva
```

## Usage

In ESLint (.eslintrc, .eslintrc.js):

```js
{
  "extends": ["@ascendancyy/eslint-config-eva"]
}
```
