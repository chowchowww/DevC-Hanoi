import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
  const [name, setName] = useState('');

  const onTextChange = text => setName(text);

  return (
    <View style={{flex: 1,}}>
      <Text>Enter your name: </Text>
      <TextInput
        placeholder='Type your name here'
        onChangeText={onTextChange}
        value={name}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Chat', {
        name: name
      })}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}