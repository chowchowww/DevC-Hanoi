import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card({ player, choice: {uri, name} }) {
    const title = name && name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>{player}</Text>
            <Image
                source={{ uri }}
                resizeMode='contain'
                style={styles.choiceImage}
            />
            <Text style={styles.choiceCardTitle}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
    },
    choiceImage: {
        width: 150,
        height: 150,
        padding: 10,
    },
    choiceDescription: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    choiceCardTitle: {
        fontSize: 30,
        color: '#250902',
    },
})