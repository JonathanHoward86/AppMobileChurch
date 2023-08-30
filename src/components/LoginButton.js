import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginButton = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginButton;
