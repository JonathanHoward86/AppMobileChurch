import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginButton from '../components/LoginButton';

const LandingScreen = ({ navigation }) => {
  const handleFrameClick = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Add LoginButton at the top */}
      <LoginButton />

      <TouchableOpacity
        style={[styles.frame, styles.redFrame]}
        onPress={() => handleFrameClick('RedFrameDetails')}
      >
        <Text style={styles.frameText}>Red Frame</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.frame, styles.blackFrame]}
        onPress={() => handleFrameClick('BlackFrameDetails')}
      >
        <Text style={styles.frameText}>Black Frame</Text>
      </TouchableOpacity>

      {/* Add more frames here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  frame: {
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  redFrame: {
    backgroundColor: 'red',
  },
  blackFrame: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
  },
  frameText: {
    color: 'white',
    fontSize: 20,
  },
});

export default LandingScreen;
