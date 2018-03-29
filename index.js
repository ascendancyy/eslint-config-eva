const config = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
};

let rules = {
  semi: ['error', 'always'],
  quotes: ['error', 'single'],
  'operator-linebreak': ['warn', 'after', { overrides: { '=': 'none' } }],

  'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off',

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
  }],
  'no-unused-expressions': ['error', {
    allowShortCircuit: true,
    allowTernary: false,
    allowTaggedTemplates: false,
  }],

  'import/no-extraneous-dependencies': ['error', {
    devDependencies: true,
  }],
  'import/extensions': ['error', 'always', {
    js: 'never',
    mjs: 'never',
    jsx: 'never',
    ts: 'never',
    tsx: 'never',
    vue: 'never',
  }],
};

try {
  require.resolve('eslint-plugin-vue');
  config.extends.push('plugin:vue/recommended');
  rules = Object.assign({}, rules, {
    'vue/order-in-components': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'error',
    'vue/require-v-for-key': 'error',
    'vue/max-attributes-per-line': [2, {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
  });
} catch (e) {
  // do nothingg
}

try {
  config.settings['import/resolver'] = {
    webpack: {
      config: require.resolve('@vue/cli-service/webpack.config.js'),
    },
  };
} catch (e) {
  // do nothing
}

config.rules = rules;

module.exports = config;
