import React from 'react';
import { View, StyleSheet, Text, SafeAreaView , Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default function Header() {
    return (
        <View>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={30} color={POLO_BLUE_COLOR} />
                <MaterialIcons name="more-horiz" size={30} color={POLO_BLUE_COLOR} />
            </View>
            <View style={styles.information}>
                <Image
                    style={styles.avatar}
                    source={require('../assets/avt3.png')}
                    resizeMode='cover'
                />
                <View>
                    <Text style={styles.titleName}>Unsplash Photo</Text>
                    <Text style={styles.jobName}>Photographer</Text>
                    <View style={styles.rowButton}>
                        <View style={styles.followButton}>
                            <Button
                                title='Follow'
                                color='white'
                            />
                        </View>
                        <View style={styles.sendMessageButton}>
                            <MaterialIcons name="send" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.followContent}>
                <View style={styles.textBox}>
                    <Text style={styles.bigText}>210</Text>
                    <Text style={styles.smallText}>Photos</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.bigText}>15k</Text>
                    <Text style={styles.smallText}>Followers</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.bigText}>605</Text>
                    <Text style={styles.smallText}>Following</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    information: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center'
    },
    avatar: {
        borderRadius: 23,
        width: 90,
        height: 90,
        marginRight: 30,
    },
    titleName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    jobName: {
        fontSize: 16,
        opacity: 0.3
    },
    rowButton: {
        flexDirection: 'row'
    },
    followButton: {
        width: 120,
        borderRadius: 25,
        backgroundColor: FOLLOW_COLOR,
        marginHorizontal: 2,
        marginVertical: 10,
    },
    sendMessageButton: {
        width: 40,
        borderRadius: 30,
        backgroundColor: SEND_MESSAGE_COLOR,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    followContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 30,
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 14,
        opacity: 0.3,
    },
});