import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password === confirmPassword) {
      const username = email.substring(0, email.indexOf("@"));
      axios.post('http://192.168.254.129:5005/auth/register', { // Adjust the URL as needed
        email,
        password,
        username
      })
      .then(response => {
        console.log("Registration successful:", response.data);
        // Navigate to Login or another screen
      })
      .catch(error => {
        console.log("Registration failed:", error);
        console.log("Error Details:", error.response);
      });
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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
});

export default RegisterScreen;
