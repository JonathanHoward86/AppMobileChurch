import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlackFrameDetailsScreen = () => {
  return (
    <View style={[styles.container, styles.blackBackground]}>
      <Text style={styles.text}>Black Frame Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBackground: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default BlackFrameDetailsScreen;
