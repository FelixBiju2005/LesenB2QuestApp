import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login to Lesen B2 Quest</Text>
      <Button title="Continue to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
