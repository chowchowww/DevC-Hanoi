import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

const ConversionTypeButton = props => {
  const fromFlag = props.from === 'usd' ? '🇺🇸' : '🇻🇳';
  const toFlag = props.to === 'usd' ? '🇺🇸' : '🇻🇳';
  return (
  <TouchableOpacity style={styles.button}>
    <Text>{fromFlag} to {toFlag}</Text>
  </TouchableOpacity>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        keyboardType='number-pad'
        autoFocus
        textAlign='center'
        placeholder='100,000,000 VND'
        selectionColor='red'
        style={styles.textInput}
      />
      <ConversionTypeButton to='usd' from='vnd'/>
      <ConversionTypeButton to='vnd' from='usd'/>
      <Text>Current currency:</Text>
      <Text style={styles.currencyText}>0.00</Text>
      <Text>Conversion currenecy:</Text>
      <Text style={styles.currencyText}>0.00</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue',
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  }
});
