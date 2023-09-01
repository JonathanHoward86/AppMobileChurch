import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import axios from 'axios'; // Import axios

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Logging in:', email, password);
    try {
      const response = await axios.post('http://192.168.254.129:5005/auth/login', {
        email,
        password,
      });
      
      if (response && response.status === 200 && response.data) {
        const { token } = response.data;
    
        // Save token to AsyncStorage
        await AsyncStorage.setItem('userToken', token);
    
        // Extract username from email
        const username = email.split('@')[0];
    
        // Save username and email to AsyncStorage
        await AsyncStorage.setItem('userName', username);
        await AsyncStorage.setItem('email', email);
    
        navigation.navigate('Profile', { screen: 'ProfileScreen', params: { email: email } });
      } else {
        console.log('Invalid login credentials');
      }
    } catch (error) {
      console.log('Error during login:', error);
    }
  };
    
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Forgot Username pressed')}>
        <Text style={styles.link}>Forgot Username?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    link: {
        color: 'blue',
        marginTop: 15,
    },
});

export default LoginScreen;
