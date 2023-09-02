import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UserProfile = () => {
  const [email, setEmail] = useState("N/A");
  const [username, setUsername] = useState("N/A");
  const [avatarSource, setAvatarSource] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('userName');
        const storedEmail = await AsyncStorage.getItem('email');

        if (storedUsername !== null) {
          setUsername(storedUsername);
        }

        if (storedEmail !== null) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.log('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('avatarSource is now:', avatarSource);
  }, [avatarSource]);

  const handleEdit = () => {
    if (isEditable) {
      saveData();
    }
    setIsEditable(!isEditable);
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userName', username);
      await AsyncStorage.setItem('email', email);
      Alert.alert('Changes saved');
    } catch (error) {
      console.log('Error saving data to AsyncStorage:', error);
      Alert.alert('Failed to save changes');
    }
  };

  const debugResponse = (response) => {
    console.log("Entire response:", response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.assets && response.assets[0].uri) {
      const source = { uri: response.assets[0].uri };
      setAvatarSource(source);
    }
  };

  const uploadAvatar = async () => {
    if (!avatarSource) {
      console.warn('URI is undefined');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', {
      uri: avatarSource.uri,
      name: 'avatar.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await axios.post('/upload-avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Successfully uploaded avatar');
      } else {
        console.log('Failed to upload avatar');
      }

    } catch (error) {
      console.log('An error occurred:', error);

      // Capture more details about the Axios error
      if (error.response) {
        console.log("Server Response: ", error.response.data);
        console.log("Status Code: ", error.response.status);
        console.log("Headers: ", error.response.headers);
      } else if (error.request) {
        console.log("The request was made, but no response was received:", error.request);
      } else {
        console.log("Something went wrong setting up the request:", error.message);
      }
    }
  };

  const selectPhotoFromCamera = () => {
    const options = { quality: 0.5, maxWidth: 200, maxHeight: 200 };
    launchCamera(options, debugResponse);
  };

  const selectPhotoFromLibrary = () => {
    const options = { quality: 0.5, maxWidth: 200, maxHeight: 200 };
    launchImageLibrary(options, debugResponse);
  };

  return (
    <View>
      <TouchableOpacity onPress={selectPhotoFromCamera}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={selectPhotoFromLibrary}>
        <Text>Select from Library</Text>
      </TouchableOpacity>
      <Image
        source={avatarSource?.uri ? avatarSource : { uri: 'https://example.com/path/to/user/profile/photo.jpg' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>Email:</Text>
      <TextInput
        placeholder={email}
        editable={isEditable}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Username:</Text>
      <TextInput
        placeholder={username}
        editable={isEditable}
        onChangeText={(text) => setUsername(text)}
      />
      <TouchableOpacity onPress={handleEdit}>
        <Text>{isEditable ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={uploadAvatar}>
        <Text>Upload Avatar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
