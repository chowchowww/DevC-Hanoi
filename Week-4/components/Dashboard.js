import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LastRecord from './LastRecords';
import { ScrollView } from 'react-native-gesture-handler';
import ListAccounts from './ListAccounts';

const data = require('../data/data.json');
const Stack = createStackNavigator();
const rightIcon = require('../assets/Icons/Group-2553x.png');
const leftIcon = require('../assets/Icons/Group-256x.png');

const HomeScreen = () => (
  <ScrollView>
    <ListAccounts accounts={data.account_information}/>
    <LastRecord records={data.detail}/>
  </ScrollView>
);

export default function Dashboard(){
  return(
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard" component={HomeScreen}
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