import React from 'react';
import { ScrollView, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LandingScreen = ({ navigation }) => {
const handleFrameClick = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={[styles.frame, styles.workoutGenerator]}
          onPress={() => handleFrameClick('WorkoutGenerator')}
        >
          <Text style={styles.frameText}>WorkoutGenerator</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: 'transparent',
  },
  frame: {
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  workoutGenerator: {
    backgroundColor: 'grey',
    width: 180,
    height: 70,
    alignSelf: 'center',
  },
  frameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
