import React from 'react';
import { View , Text , StyleSheet , Button } from 'react-native'

const ColorCounter = ({ color , onIncrease , onDecrese }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrese()} title={`Decrese ${color}`} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter;