import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function MainApp({ navigation }) {
  const [name, setName] = useState('');

  const onTextChange = name => setName(name);

  const onPress = () => navigation.navigate('Chat', {id: Math.random().toString(36).substring(7),name: name});

  return (
    <View>
      <Text style={styles.title}>Enter Your Name: </Text>
      <TextInput
        style={styles.nameInput}
        placeholder='Type Name Here'
        onChangeText={onTextChange}
        value={name}
      />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  nameInput: {
    height: 48,
    margin: 24,
    paddingHorizontal: 24,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: 24,
    marginLeft: 24,
    fontSize: 24,
  },
  buttonText: {
    marginLeft: 24,
    fontSize: 24,
  }
})