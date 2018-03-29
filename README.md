# [EVA] ESLint config

## Differences from Airbnb

- `operator-linebreak`: `'after'`
- `no-debugger`: `'off'` when developing
- `no-param-reassignr`: prop reassignment allowed for `el`
- `no-unused-expressions`: allow short circuiting (`foo && foo()`)

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
