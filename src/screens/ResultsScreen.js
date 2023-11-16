import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const ResultsScreen = ({ route }) => {
    const { reps } = route.params;

    return (
        <ImageBackground source={require('../assets/results.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Workout Preview</Text>
                {Object.entries(reps).map(([exercise, repCount], index) => (
                    <View key={index} style={styles.workoutContainer}>
                        <Text style={styles.exerciseText}>{exercise}: {repCount} reps</Text>
                    </View>
                ))}
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
        flex: 1,
        padding: 20,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textAlign: 'center',
    },
    workoutContainer: {
        marginBottom: 10,
    },
    exerciseText: {
        padding: 10,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 24,
    },
    // Add more styles as needed
});

export default ResultsScreen;
