import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button(props){
    return (
    <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => props.onPress(props.name)}
    >
        <Text style={styles.buttonText}>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        height: 50,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    }
})