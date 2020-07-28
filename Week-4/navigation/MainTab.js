import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import { Image, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
const rightIcon = require('../assets/Icons/Group-2553x.png');
const leftIcon = require('../assets/Icons/Group-256x.png');
const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

const DashboardScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard" component={Dashboard}
    />
  </Stack.Navigator>
)

const MainScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: { height: 70},
      activeTintColor: '#FF958F',
      inactiveTintColor: '#989898',
      labelStyle: { fontSize: 20, },
      tabStyle: { justifyContent: 'center', },
    }}
    initialRouteName= 'Dashboard'
  >
    <Tab.Screen name='Dashboard' component={DashboardScreen}/>
    <Tab.Screen name='Profile' component={Profile}/>
  </Tab.Navigator>
)

function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notification</Text>
      <Button onPress={() => navigation.goBack()} title='Back' />
    </View>
  )
}

export default function MainTab({ navigation }){
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name='Home'
          component={MainScreen}
          options={{
            title: 'Dashboard',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F2F4F7',
            },
            headerRight: () =>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}
              >
                <Image
                  source={rightIcon}
                  resizeMode='contain'
                  style={styles.rightIconStyle}
                />
              </TouchableOpacity>,
            headerLeft: () =>
              <TouchableOpacity
                onPress={() => alert('This is left button')}
              >
                <Image
                    source={leftIcon}
                    resizeMode='contain'
                    style={styles.rightIconStyle}
                />
              </TouchableOpacity>
          }}
        />
        <MainStack.Screen
          name='Notification'
          component={Notification}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  rightIconStyle: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  }
});