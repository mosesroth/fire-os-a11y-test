module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native-a11y/recommended',
  ],
  plugins: [
    'react',
    'react-native',
    'react-native-a11y',
  ],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    // Accessibility rules from eslint-plugin-react-native-a11y
    'react-native-a11y/has-accessibility-props': 'error',
    'react-native-a11y/has-valid-accessibility-component-type': 'error',
    'react-native-a11y/has-accessibility-hint': 'error',
    'react-native-a11y/accessible-image-has-label': 'error',
    'react-native-a11y/has-valid-accessibility-actions': 'error',
    'react-native-a11y/has-valid-accessibility-states': 'error',
    'react-native-a11y/has-valid-accessibility-value': 'error',
    'react-native-a11y/no-nested-touchables': 'error',
    'react-native-a11y/accessibility-label-has-string-literal': 'error',
    'react-native-a11y/touchable-has-alt': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
