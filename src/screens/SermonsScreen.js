import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const SermonScreen = () => {
  const openSermonVideoPlayer = () => {
    // Replace with the actual URL of the church's Bible reader
    const sermonVideoPlayer = 'https://www.youtube.com/';

    // Open the URL in the user's default web browser
    Linking.openURL(sermonVideoPlayer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore older Sermons on Demand</Text>
      <Text style={styles.description}>Discover our older Sermon content in our web app.</Text>
      <TouchableOpacity style={styles.button} onPress={openSermonVideoPlayer}>
        <Text style={styles.buttonText}>Open Sermon Video Player</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SermonScreen;
