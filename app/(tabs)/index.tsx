import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello 👋</Text>
      
      <Text style={styles.subtitle}>
        Welcome to my Expo App!
      </Text>

      <Button 
        title="Continue"
        onPress={() => alert('Let’s go 🚀')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});