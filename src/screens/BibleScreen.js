import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const BibleScreen = () => {
  const openFullBibleReader = () => {
    // Replace with the actual URL of the church's Bible reader
    const bibleReaderURL = 'https://www.biblegateway.com/';

    // Open the URL in the user's default web browser
    Linking.openURL(bibleReaderURL);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore the Bible</Text>
      <Text style={styles.description}>Discover the full Bible content in our web app.</Text>
      <TouchableOpacity style={styles.button} onPress={openFullBibleReader}>
        <Text style={styles.buttonText}>Open Bible Reader</Text>
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

export default BibleScreen;
