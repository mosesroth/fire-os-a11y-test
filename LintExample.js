import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  TextInput
} from 'react-native';

// This file contains examples that will trigger eslint-plugin-react-native-a11y errors
// Run: npx eslint LintExample.js to see the linting errors

export default function LintExample() {
  return (
    <View>
      {/* Example 1: Missing accessibility props */}
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <Text>Button without accessibility props</Text>
      </TouchableOpacity>
      
      {/* Example 2: Invalid accessibility role */}
      <Text accessibilityRole="invalid-role">Text with invalid role</Text>
      
      {/* Example 3: Image without accessibility label */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50 }}
      />
      
      {/* Example 4: Missing accessibility hint */}
      <TextInput
        accessibilityLabel="Email input"
        placeholder="Enter email"
        // Missing accessibilityHint
      />
      
      {/* Example 5: Nested touchables */}
      <TouchableOpacity onPress={() => console.log('outer')}>
        <Text>Outer touchable</Text>
        <TouchableOpacity onPress={() => console.log('inner')}>
          <Text>Inner touchable (nested)</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      
      {/* Example 6: Non-string literal for accessibility label */}
      <TouchableOpacity 
        accessibilityLabel={`Dynamic ${new Date().toISOString()}`}
        onPress={() => console.log('dynamic label')}
      >
        <Text>Dynamic accessibility label</Text>
      </TouchableOpacity>
      
      {/* Example 7: Invalid accessibility actions */}
      <View
        accessibilityActions={[
          // Missing required name property
          { label: 'Incomplete action' }
        ]}
      >
        <Text>Invalid accessibility actions</Text>
      </View>
    </View>
  );
}
