import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView,
  TextInput,
  Alert
} from 'react-native';

// Component to demonstrate accessibility rules with explanations
const AccessibilityRule = ({ title, description, goodExample, badExample, ruleName, ruleLink }) => {
  return (
    <View style={styles.ruleContainer}>
      <Text style={styles.ruleTitle}>{title}</Text>
      <Text style={styles.ruleDescription}>{description}</Text>
      
      <View style={styles.exampleBox}>
        <Text style={styles.exampleLabel}>✅ Good Example (Passes Lint):</Text>
        {goodExample}
        <Text style={styles.ruleName}>Rule: {ruleName}</Text>
        <Text style={styles.ruleLink} onPress={() => Alert.alert('Rule Documentation', `See: ${ruleLink}`)}>
          View Rule Documentation
        </Text>
      </View>
      
      <View style={styles.exampleBox}>
        <Text style={styles.exampleLabel}>❌ Bad Example (Fails Lint):</Text>
        {badExample}
        <Text style={styles.lintError}>
          eslint: {ruleName} error
        </Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        eslint-plugin-react-native-a11y Demo
      </Text>
      
      <Text style={styles.subtitle}>
        Visual demonstration of accessibility linting rules
      </Text>
      
      {/* Example 1: has-accessibility-props */}
      <AccessibilityRule
        title="has-accessibility-props"
        description="Elements should have appropriate accessibility props for screen readers"
        ruleName="has-accessibility-props"
        ruleLink="https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-accessibility-props.md"
        goodExample={
          <TouchableOpacity 
            style={styles.button}
            accessibilityLabel="Submit form"
            accessibilityHint="Submits the form and continues to next screen"
            accessibilityRole="button"
            onPress={() => Alert.alert('Button pressed')}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        }
        badExample={
          <TouchableOpacity 
            style={styles.badButton}
            onPress={() => Alert.alert('Bad button pressed')}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        }
      />
      
      {/* Example 2: has-valid-accessibility-role */}
      <AccessibilityRule
        title="has-valid-accessibility-role"
        description="Use proper accessibilityRole values"
        ruleName="has-valid-accessibility-role"
        ruleLink="https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-valid-accessibility-role.md"
        goodExample={
          <View>
            <Text accessibilityRole="header" style={styles.demoText}>Section Header</Text>
            <Text accessibilityRole="text" style={styles.demoText}>Regular text content</Text>
          </View>
        }
        badExample={
          <View>
            <Text accessibilityRole="invalid-role" style={styles.demoText}>Invalid Role</Text>
          </View>
        }
      />
      
      {/* Example 3: has-accessibility-hint */}
      <AccessibilityRule
        title="has-accessibility-hint"
        description="Interactive elements should have hints explaining what happens when activated"
        ruleName="has-accessibility-hint"
        ruleLink="https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/main/docs/rules/has-accessibility-hint.md"
        goodExample={
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            accessibilityLabel="Email input field"
            accessibilityHint="Enter your email address to receive notifications"
          />
        }
        badExample={
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            accessibilityLabel="Email input field"
            // Missing accessibilityHint
          />
        }
      />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          These examples demonstrate the rules from eslint-plugin-react-native-a11y
        </Text>
        <Text style={styles.footerText}>
          Run "npx eslint LintExample.js" to see which issues are detected
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  ruleContainer: {
    width: '100%',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  ruleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  ruleDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  exampleBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  exampleLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ruleName: {
    fontSize: 12,
    color: '#0066cc',
    marginTop: 10,
    fontStyle: 'italic',
  },
  ruleLink: {
    fontSize: 12,
    color: '#0066cc',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  lintError: {
    fontSize: 12,
    color: '#cc0000',
    marginTop: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  badButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  nestedButton: {
    backgroundColor: '#FF6347',
    padding: 8,
    borderRadius: 3,
    alignItems: 'center',
    marginTop: 5,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  demoText: {
    padding: 5,
  },
  actionDemo: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
});
