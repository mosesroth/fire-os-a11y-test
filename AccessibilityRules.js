// This file contains information about the eslint-plugin-react-native-a11y rules

export const accessibilityRules = [
  {
    id: 'has-accessibility-props',
    name: 'has-accessibility-props',
    description: 'Enforces that all interactive elements have proper accessibility props',
    fireOsNotes: 'Essential for Fire TV navigation with voice control and screen readers',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-accessibility-props.md'
  },
  {
    id: 'has-valid-accessibility-component-type',
    name: 'has-valid-accessibility-component-type',
    description: 'Enforces that accessibilityRole values are valid',
    fireOsNotes: 'Fire OS relies on valid accessibility roles for proper screen reader behavior',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-valid-accessibility-component-type.md'
  },
  {
    id: 'accessible-image-has-label',
    name: 'accessible-image-has-label',
    description: 'Enforces that all images have accessibilityLabel props',
    fireOsNotes: 'Fire TV screen readers need labels to describe images to users',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/accessible-image-has-label.md'
  },
  {
    id: 'has-accessibility-hint',
    name: 'has-accessibility-hint',
    description: 'Enforces that elements have accessibilityHint to explain results of actions',
    fireOsNotes: 'Particularly important for Fire TV remote navigation to understand outcomes',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-accessibility-hint.md'
  },
  {
    id: 'touchable-has-alt',
    name: 'touchable-has-alt',
    description: 'Enforces that touchable elements have accessibility text',
    fireOsNotes: 'Critical for Fire TV navigation where visual cues may not be sufficient',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/touchable-has-alt.md'
  },
  {
    id: 'has-valid-accessibility-actions',
    name: 'has-valid-accessibility-actions',
    description: 'Enforces that accessibilityActions are properly formatted',
    fireOsNotes: 'Custom actions need proper formatting for Fire OS accessibility services',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-valid-accessibility-actions.md'
  },
  {
    id: 'has-valid-accessibility-states',
    name: 'has-valid-accessibility-states',
    description: 'Enforces that accessibilityState values are valid',
    fireOsNotes: 'Fire OS uses these states to communicate component status to screen readers',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-valid-accessibility-states.md'
  },
  {
    id: 'has-valid-accessibility-value',
    name: 'has-valid-accessibility-value',
    description: 'Enforces that accessibilityValue is properly formatted',
    fireOsNotes: 'Important for Fire TV voice feedback on component values',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-valid-accessibility-value.md'
  },
  {
    id: 'no-nested-touchables',
    name: 'no-nested-touchables',
    description: 'Prevents touchable elements from being nested',
    fireOsNotes: 'Prevents navigation confusion on Fire TV with D-pad navigation',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/no-nested-touchables.md'
  },
  {
    id: 'accessibility-label-has-string-literal',
    name: 'accessibility-label-has-string-literal',
    description: 'Enforces that accessibilityLabel values are string literals',
    fireOsNotes: 'Ensures consistent voice feedback on Fire OS devices',
    docs: 'https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/accessibility-label-has-string-literal.md'
  }
];
