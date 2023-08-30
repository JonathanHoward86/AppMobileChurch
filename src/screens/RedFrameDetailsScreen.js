import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RedFrameDetailsScreen = () => {
  return (
    <View style={[styles.container, styles.redBackground]}>
      <Text style={styles.text}>Red Frame Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBackground: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default RedFrameDetailsScreen;
