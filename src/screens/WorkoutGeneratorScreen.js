import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ImageBackground } from 'react-native';

const WorkoutGeneratorScreen = ({ navigation }) => {
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);


  const frameOptions = {
    'Upper Body': ['Pushup', 'Overhead Press', 'Triceps Extension', 'Biceps Curl', 'Commando Plank', 'Coupon Row'],
    'Lower Body': ['Goblet Squat', 'Coupon Lunge', 'Thruster', 'Coupon Deadlift'],
    'Core': ['WWII Situp', 'Leg Over Coupon', 'Coupon Vup', 'Coupon Russian Twist', 'Baby Maker'],
    'Cardio': ['Run', 'Sprint', 'Coupon Swing', 'Motivators', 'Burpees', 'Plank Jacks', 'Mountain Climbers'],
  }

  const goToSelectionScreen = () => {
    setModalVisible(false);
    navigation.navigate('SelectionScreen', { selectedOptions });
  };

  const handleFramePress = (frame) => {
    setSelectedFrame(frame);
    setModalVisible(true);
  };

  const handleOptionToggle = (option) => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(opt => opt !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const isOptionSelected = (option) => {
    return selectedOptions.includes(option);
  };

  const renderOptionsModal = () => {
    if (!selectedFrame) return null;

    const options = frameOptions[selectedFrame] || [];

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Options for {selectedFrame}</Text>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.optionButton, isOptionSelected(option) && styles.optionSelected]}
              onPress={() => handleOptionToggle(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <ImageBackground source={require('../assets/workout.jpg')} style={styles.backgroundImage}>
      <View style={[styles.container, styles.blackBackground]}>
        <Text style={styles.text}>Workout Generator</Text>

        {/* Example Frames */}
        <TouchableOpacity style={styles.frame} onPress={() => handleFramePress('Upper Body')}>
          <Text style={styles.text}>Upper Body</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frame} onPress={() => handleFramePress('Lower Body')}>
          <Text style={styles.text}>Lower Body</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frame} onPress={() => handleFramePress('Core')}>
          <Text style={styles.text}>Core</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frame} onPress={() => handleFramePress('Cardio')}>
          <Text style={styles.text}>Cardio</Text>
        </TouchableOpacity>
        {renderOptionsModal()}
        {selectedOptions.length > 0 && (
          <TouchableOpacity
            style={[styles.navigateButton, styles.buttonClose]}
            onPress={goToSelectionScreen}
          >
            <Text style={styles.textStyle}>Proceed to Selection</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBackground: {
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    fontSize: 24,
    padding: 10,
  },
  frame: {
    margin: 10,
    padding: 10,
    backgroundColor: '#202020',
    borderRadius: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  optionButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  optionSelected: {
    backgroundColor: 'blue',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  navigateButton: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default WorkoutGeneratorScreen;
