import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../constants/colors';
// import {axios} from 'axios';

const Login = () => {
  const navigation = useNavigation();

  // const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/login', {  // Replace with your backend URL
                email,
                password
            });
            Alert.alert('Success', response.data.message);
            // Redirect to dashboard or perform other actions on successful login
        } catch (error) {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          {/* Back button removed */}
        </TouchableOpacity>
        <Text style={styles.headingText}>Login</Text>
        <Text style={styles.subHeadingText}>Master your money and achieve your financial goals.</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            // onChangeText={setEmail}
            // value={email}
            placeholderTextColor={COLORS.grey}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            // onChangeText={setPassword}
            // value={password}
            placeholderTextColor={COLORS.grey}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} 
            onPress={async () => {
                console.log('Login pressed');
                const loginSuccessful =true;
                // const loginSuccessful = await handleLogin();
                if (loginSuccessful) {
                  navigation.navigate('Dashboard');
                } else {
                    // Handle error, display message, etc.
                    console.log('Login failed');
                }
            }}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.black,
    top:30,
    marginBottom: 50,
    textAlign: 'center',
  },
  subHeadingText: {
    fontSize: 20,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: COLORS.secondary,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
