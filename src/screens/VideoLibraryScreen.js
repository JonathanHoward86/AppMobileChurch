import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import WebView from 'react-native-webview';

const VideoLibraryScreen = () => {
  const videoData = [
    { title: "Daniel - Week 1", url: 'https://subsplash.com/argylecommunitychurch/media/mi/+p8w4tth' },
    { title: "Daniel - Week 2", url: 'https://subsplash.com/argylecommunitychurch/media/mi/+ngvy6z9' },
    { title: "Daniel - Week 3", url: 'https://subsplash.com/argylecommunitychurch/media/mi/+ngvy6z9' },
    { title: "Daniel - Week 4", url: 'https://subsplash.com/argylecommunitychurch/media/mi/+ngvy6z9' },
    { title: "Daniel - Week 5", url: 'https://subsplash.com/argylecommunitychurch/media/mi/+ngvy6z9' },
    // Add more Subsplash URLs here
  ];

  const renderVideoItem = ({ item }) => (
    <View style={{ marginVertical: 20 }}>
      <Text>{item.title}</Text>
      <WebView
        source={{ uri: item.url }}
        style={{ height: 300 }}
      />
    </View>
  );

  return (
    <FlatList
      data={videoData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderVideoItem}
    />
  );
};

export default VideoLibraryScreen;
