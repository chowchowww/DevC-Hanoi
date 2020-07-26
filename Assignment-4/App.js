import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllScreen from './screens/AllScreen';
import CompleteScreen from './screens/CompleteScreen';
import ActiveScreen from './screens/ActiveScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            labelStyle: {fontSize: 20, marginBottom: 10}
          }}
          initialRouteName= 'All'
        >
          <Tab.Screen name='Completed' component={CompleteScreen}/>
          <Tab.Screen name='All' component={AllScreen}/>
          <Tab.Screen name='Active' component={ActiveScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
