import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {} from 'react-native-gifted-chat';
import database from '../services/firebase';

export default function Chat({ route }) {
  const [message, setMessage] = useState([]);

  const messagesFB = database.collection('messages');

  const { name } = route.params;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}