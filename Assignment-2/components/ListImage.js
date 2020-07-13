import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const imgData = [
    {id :'1', src: require('../assets/pic1.jpg')},
    {id :'2', src: require('../assets/pic2.jpg')},
    {id :'3', src: require('../assets/pic3.jpg')},
    {id :'4', src: require('../assets/pic4.jpg')},
    {id :'5', src: require('../assets/pic5.jpg')},
    {id :'6', src: require('../assets/pic6.jpg')}
];

const centerImgData = Math.floor(imgData.length / 2);

export default function ListImage() {
    return (
        <ScrollView
            contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50
            }}
        >
            <View
                style={{
                    flexDirection: 'column'
                }}
            >
                {imgData.slice(0, centerImgData).map(item => <Image source={item.src} style={styles.image} />)}
            </View>
            <View
                style={{
                    flexDirection: 'column'
                }}
            >
                {imgData.slice(centerImgData).map(item => <Image source={item.src} style={styles.image} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
        width: 200,
    }
});