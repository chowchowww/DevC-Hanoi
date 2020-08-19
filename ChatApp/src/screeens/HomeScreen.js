import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
    const [name,setName]=useState({});
    const chatRouting= useCallback(()=>{
        navigation.navigate('Chat',{name:name});
    },[name]); 
    const changeTextHandler=(val)=>{
        setName(val);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.body}>
                <Text>Enter Your Name:</Text>
                <TextInput onChangeText={changeTextHandler} style={styles.inputText} placeholder={'Your name...'}/>
                <TouchableOpacity onPress={chatRouting}>
                    <Button title="Go to Chat"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },inputText:{
        width:Dimensions.get('screen').width*3/4,
        height:100,
        borderWidth:1,
        borderRadius:20,
        borderBottomColor:'coral'
    }
})
