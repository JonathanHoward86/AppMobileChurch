import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const SelectionScreen = ({ route, navigation }) => {
    const { selectedOptions } = route.params;
    const [reps, setReps] = useState(selectedOptions.reduce((acc, option) => {
        acc[option] = 0;
        return acc;
    }, {}));

    const handleRepChange = (option, value) => {
        const newReps = isNaN(value) ? 0 : parseInt(value, 10);
        setReps(prevReps => ({ ...prevReps, [option]: newReps }));
    };

    const handlePreviewPress = () => {
        navigation.navigate('ResultsScreen', { reps });
    };

    return (
        <ImageBackground source={require('../assets/selection.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.headerText}>Select Number of Sets/Reps</Text>
                {selectedOptions.map((option, index) => (
                    <View key={index} style={styles.optionContainer}>
                        <Text style={styles.optionText}>{option}</Text>
                        <TextInput
                            style={styles.repsInput}
                            onChangeText={(value) => handleRepChange(option, value)}
                            value={reps[option].toString()}
                            keyboardType="numeric"
                        />
                    </View>
                ))}

                <TouchableOpacity onPress={handlePreviewPress} style={styles.previewButton}>
                    <Text style={styles.previewButtonText}>Preview Workouts</Text>
                </TouchableOpacity>
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
        padding: 20,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 10,
    },
    button: {
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    repsText: {
        fontSize: 18,
        marginHorizontal: 5,
    },
    previewButton: {
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 20,
    },
    previewButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    repsInput: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginHorizontal: 5,
        width: 50, // Adjust as needed
        textAlign: 'center',
        color: 'white',
    },
});

export default SelectionScreen;
