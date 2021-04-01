import React , { useState } from 'react';

import { View , Text , StyleSheet } from 'react-native'

import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 15;

const SquareSreen = () => {
    
    const [ red , setRed ] = useState(0);
    const [green , setGreen ] = useState(0);
    const [blue , setBlue ] = useState(0);


    const setColor = (color , change) => {
        //color will be red or green or blue
        //change == +15 or -15


        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;

            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;

            default:
                return;

        }

       

    };


 

    return (
        <View>
            <ColorCounter 
            onDecrese={() => setColor('red' , -1 * COLOR_INCREMENT)} 
            onIncrease={() => setColor('red' ,  COLOR_INCREMENT)} 
            color="RED" />
            <ColorCounter 
            onDecrese={() => setColor('blue' , -1 * COLOR_INCREMENT)} 
            onIncrease={() => setColor('blue' , COLOR_INCREMENT)} 
            color="BLUE" />
            <ColorCounter 
            onDecrese={() => setColor('green' , -1 * COLOR_INCREMENT)} 
            onIncrease={() => setColor('green' , COLOR_INCREMENT)} 
            color="GREEN" />

            <View style={{ height: 200 , width: 150 , backgroundColor: `rgb(${red} , ${green} , ${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareSreen;