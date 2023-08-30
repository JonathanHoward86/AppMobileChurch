import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {  // Notice the navigation argument here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    console.log('Logging in:', email, password);
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
