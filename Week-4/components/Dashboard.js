import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LastRecord from './LastRecords';

const data = require('../data/data.json');
const Stack = createStackNavigator();
const rightIcon = require('../assets/Icons/Group-2553x.png');
const leftIcon = require('../assets/Icons/Group-256x.png');

export default function HomeScreen(){
  return(
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard" component={LastRecord}
          options={{
            headerRight: () =>
              <Image
                onPress={() => alert('This is a button!')}
                source={rightIcon}
                resizeMode='contain'
                style={styles.rightIconStyle}
              />,
            headerLeft: () =>
              <Image
                  onPress={() => alert('This is a button!')}
                  source={leftIcon}
                  resizeMode='contain'
                  style={styles.rightIconStyle}
                />
          }}
        />
      </Stack.Navigator>
  )
};

const styles = StyleSheet.create({
  rightIconStyle: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  }
});