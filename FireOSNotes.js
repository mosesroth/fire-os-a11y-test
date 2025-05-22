import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function FireOSNotes() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Fire OS Accessibility Notes
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fire OS Overview</Text>
        <Text style={styles.paragraph}>
          Fire OS is Amazon's Android-based operating system used on Fire TV and Fire Tablet devices.
          While it's based on Android, there are specific considerations for accessibility implementation.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Differences from Standard Android</Text>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Remote Navigation:</Text> Fire TV uses D-pad remote navigation instead of touch, requiring careful focus management.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Voice Control:</Text> Fire OS has extensive voice control capabilities through Alexa, which relies on proper accessibility labels.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Screen Reader:</Text> Fire OS uses VoiceView as its screen reader, which may interpret accessibility properties differently than TalkBack.
          </Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fire TV Specific Considerations</Text>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Use <Text style={styles.code}>hasTVPreferredFocus</Text> to set initial focus
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Implement <Text style={styles.code}>nextFocusDown</Text>, <Text style={styles.code}>nextFocusUp</Text>, <Text style={styles.code}>nextFocusLeft</Text>, and <Text style={styles.code}>nextFocusRight</Text> for D-pad navigation
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Ensure focus indicators are highly visible with good contrast
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Test with actual Fire TV remote, not just emulator
          </Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fire Tablet Specific Considerations</Text>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Support both touch and keyboard navigation
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Ensure touch targets are at least 48x48dp
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>
            Test with VoiceView screen reader enabled
          </Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testing eslint-plugin-react-native-a11y with Fire OS</Text>
        <Text style={styles.paragraph}>
          The eslint-plugin-react-native-a11y helps catch many accessibility issues that affect Fire OS devices,
          but manual testing is still essential. Here's how to test:
        </Text>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>1.</Text>
          <Text style={styles.listText}>
            Run ESLint with the react-native-a11y plugin to catch basic issues
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>2.</Text>
          <Text style={styles.listText}>
            Test on actual Fire OS devices with accessibility features enabled
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>3.</Text>
          <Text style={styles.listText}>
            For Fire TV, test D-pad navigation thoroughly
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bulletPoint}>4.</Text>
          <Text style={styles.listText}>
            For Fire Tablet, test with VoiceView and explore by touch
          </Text>
        </View>
      </View>
      
      <View style={styles.calloutBox}>
        <Text style={styles.calloutTitle}>Important Note</Text>
        <Text style={styles.calloutText}>
          While eslint-plugin-react-native-a11y catches many issues, it doesn't specifically target Fire OS.
          Always perform manual testing on actual Fire OS devices to ensure full compatibility.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0066cc',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 5,
  },
  bulletPoint: {
    width: 15,
    fontSize: 16,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  code: {
    fontFamily: 'Courier',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  calloutBox: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#0d47a1',
  },
  calloutText: {
    fontSize: 15,
    lineHeight: 22,
  },
});
