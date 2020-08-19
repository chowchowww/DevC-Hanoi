import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screeens/HomeScreen';
import NewChat from '../screeens/NewChat';


const Stack=createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Chat" component={NewChat} options={({route})=>(route.params.name?{title:route.params.name}:{title:'Chat'})}/>
        </Stack.Navigator>
    )
}
