import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { getUserId, addEvent } from '../App.js';
import axios from 'axios';
import { Button, Alert, View, Text, TextInput, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CalendarScreen = () => {
    const [userId, setUserId] = useState(null);
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newEventName, setNewEventName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('12:00');

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await getUserId();
                console.log("Fetched User ID:", id); // Debug log to check if userId is being fetched
                if (id) {
                    setUserId(id);
                } else {
                    console.log("UserId is null, not setting it.");
                }
            } catch (error) {
                console.error("Error fetching User ID:", error);
            }
        };
        fetchUserId();
    }, []);

    useEffect(() => {
        if (userId) {
            const fetchEvents = async () => {
                try {
                    const response = await axios.get('/getEvents', { params: { userId } });
                    setEvents(response.data);
                } catch (error) {
                    console.error("Error fetching events:", error);
                }
            };
            fetchEvents();
        }
    }, [userId]);

    const markedDates = {};

    events.forEach((event) => {
        markedDates[event.date] = { selected: true, marked: true, dotColor: event.type === 'user_event' ? 'blue' : 'green' };
    });

    const handleDayPress = (day) => {
        console.log('Day clicked:', day.dateString);
        setSelectedDate(day.dateString);
        const selectedDayEvents = events.filter(event => event.date === day.dateString);
        Alert.alert('Events for this day:', selectedDayEvents.map(e => `${e.name} at ${e.time}`).join('\n') || 'No events');
    };

    const handleSaveEvent = async () => {
        console.log("Attempting to save event...");
        console.log("User ID:", userId);
        console.log("Event Name:", newEventName);
        console.log("Selected Date:", selectedDate);
        console.log("Selected Time:", selectedTime);

        if (userId && newEventName && selectedDate) {
            console.log("All info present, saving event...");
            await addEvent(userId, newEventName, selectedDate, selectedTime);
            setEvents([...events, { name: newEventName, date: selectedDate, type: 'user_event', time: selectedTime }]);
            setNewEventName('');
            setSelectedTime('12:00');
            setModalVisible(false);
        } else {
            console.log("Unable to save event, missing some info.");
        }
    };

    return (
        <>
            <Calendar
                markedDates={markedDates}
                onDayPress={handleDayPress}
            />
            <Button
                title="Add Event"
                onPress={() => { setModalVisible(true); }}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ margin: 20, padding: 20, backgroundColor: 'white' }}>
                    <Text>Plan your new event for {selectedDate}</Text>
                    <TextInput
                        placeholder="Event name"
                        value={newEventName}
                        onChangeText={setNewEventName}
                    />
                    <Picker
                    // ... (rest of the Picker remains the same)
                    />
                    <Button
                        title="Save"
                        onPress={handleSaveEvent}
                    />
                    <Button
                        title="Cancel"
                        onPress={() => { setModalVisible(false); setNewEventName(''); setSelectedTime('12:00'); }}
                    />
                </View>
            </Modal>
        </>
    );
};

export default CalendarScreen;
