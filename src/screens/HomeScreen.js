import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Willkommen zu Lesen B2!</Text>
      <Button title="Start Story" onPress={() => navigation.navigate('Story')} />
    </View>
  );
}
