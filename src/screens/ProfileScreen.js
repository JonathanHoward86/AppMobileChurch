import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const selectPhotoFromCamera = () => {
    const options = {
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  };

  const selectPhotoFromLibrary = () => {
    const options = {
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
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
        source={avatarSource || { uri: 'https://example.com/path/to/user/profile/photo.jpg' }}
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
    </View>
  );
};

export default UserProfile;
