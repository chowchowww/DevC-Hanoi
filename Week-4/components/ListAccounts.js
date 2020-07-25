import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ListAccounts({ accounts }){
  return(
    <View>
      <Text>List of Account</Text>
      <Text>{Object.keys(accounts)}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});