import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail score="9" title="beach" imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail score="8" title="Forest" imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail score="7" title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
        </View>
    
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;