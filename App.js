import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView,
  Alert
} from 'react-native';

// Simple component to demonstrate accessibility rules
const AccessibilityExample = ({ title, description, goodExample, badExample }) => {
  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.exampleTitle}>{title}</Text>
      <Text style={styles.exampleDescription}>{description}</Text>
      
      <View style={styles.goodExample}>
        <Text style={styles.exampleLabel}>✅ Good Example:</Text>
        {goodExample}
      </View>
      
      <View style={styles.badExample}>
        <Text style={styles.exampleLabel}>❌ Bad Example:</Text>
        {badExample}
      </View>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="header">
          A11y Demo
        </Text>
        <Text style={styles.subtitle}>
          Accessibility on Fire OS
        </Text>
      </View>
      
      <AccessibilityExample
        title="Accessible Buttons"
        description="Buttons should have proper accessibility labels"
        goodExample={
          <TouchableOpacity 
            style={styles.button}
            accessibilityLabel="Submit form"
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
      
      <AccessibilityExample
        title="Proper Text Roles"
        description="Text elements should have appropriate roles"
        goodExample={
          <View>
            <Text accessibilityRole="header" style={styles.demoText}>Section Header</Text>
            <Text accessibilityRole="text" style={styles.demoText}>Regular text content</Text>
          </View>
        }
        badExample={
          <View>
            <Text style={styles.demoText}>Missing role for header</Text>
            <Text style={styles.demoText}>Missing role for text</Text>
          </View>
        }
      />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          eslint-plugin-react-native-a11y demo
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  exampleContainer: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exampleDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  goodExample: {
    backgroundColor: '#e6f7e6',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#c3e6cb',
  },
  badExample: {
    backgroundColor: '#f8d7da',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f5c6cb',
  },
  exampleLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  badButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  demoText: {
    padding: 5,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});
