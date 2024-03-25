import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Welcome = () => {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

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
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={[styles.button, styles.createAccountText]} // Green background color
      >
        <Text>Create Account </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.button, styles.loginText]} // White background color
      >
        <Text>Already have an account? Login </Text>
      </TouchableOpacity>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 15,
    borderWidth: 1.2,
  },
  createAccountText: {
    borderColor: '#31A062', // Green border color
    backgroundColor: '#31A062', // Green background color
  },
  loginText: {
    borderColor: '#FFFFFF', // White border color
    backgroundColor: '#FFFFFF', // White background color
  },
});

export default Welcome;
