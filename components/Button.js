import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './Button'; // Assuming the Button component is in the same directory

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={require('../assets/image.png')}
          style={styles.logo}
        >
          {/* Logo Image Background */}
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Achieve your financial goals, one step at a time
        </Text>
      </View>
      <Button
        title="Create Account"
        onPress={() => console.log('Create Account pressed')} // Add your logic here
        style={styles.button}
      />
      <Text style={styles.loginText}>
        Already have an account? Login
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  button: {
    marginTop: 20,
  },
  loginText: {
    marginTop: 20,
    color: '#007260', // Assuming this is your primary color for the button
  },
});

export default Welcome;
