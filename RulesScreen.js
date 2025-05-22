import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  Linking
} from 'react-native';
import { accessibilityRules } from './AccessibilityRules';

export default function RulesScreen() {
  const openRuleDoc = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        eslint-plugin-react-native-a11y Rules
      </Text>
      
      <Text style={styles.subtitle}>
        Rules for testing Fire OS accessibility compatibility
      </Text>
      
      {accessibilityRules.map((rule) => (
        <View key={rule.id} style={styles.ruleContainer}>
          <Text style={styles.ruleName}>{rule.name}</Text>
          <Text style={styles.ruleDescription}>{rule.description}</Text>
          
          <View style={styles.fireOsBox}>
            <Text style={styles.fireOsTitle}>Fire OS Relevance:</Text>
            <Text style={styles.fireOsNotes}>{rule.fireOsNotes}</Text>
          </View>
          
          <TouchableOpacity
            style={styles.docsButton}
            onPress={() => openRuleDoc(rule.docs)}
            accessibilityLabel={`View documentation for ${rule.name} rule`}
            accessibilityHint="Opens the rule documentation in your browser"
            accessibilityRole="link"
          >
            <Text style={styles.docsButtonText}>View Documentation</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  ruleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 8,
  },
  ruleDescription: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  fireOsBox: {
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#ff9800',
  },
  fireOsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#e65100',
  },
  fireOsNotes: {
    fontSize: 14,
    lineHeight: 20,
  },
  docsButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  docsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
