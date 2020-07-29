import {  StyleSheet } from 'react-native';
import * as React from 'react';

const styles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        marginRight: 100,
    },
    inputAndroid: {

        fontSize: 16,
        paddingHorizontal: 50,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingLeft: 30, // to ensure the text is never behind the icon
    },
    iconContainer: {
        top: 10,
        left: 0,

    },

    color: {
        color: "black"
    },

    Btn: {
        alignSelf: 'center',

    },
    input: {
        color: "black",
        alignSelf: 'center',
        backgroundColor: "white"

    },
    Item: {
        marginLeft: 0,
    }
});
export default styles;