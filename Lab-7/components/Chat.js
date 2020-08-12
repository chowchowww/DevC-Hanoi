import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import database from '../services/Fire';

export default function Chat({ route, navigation }) {
  const [messages, setMessages] = useState([]);

  const { id, name } = route.params;

  const user = { id, name };

  const messagesRef = database.collection('messages');

  useEffect(() => {
    const unsubscribe = messagesRef.onSnapshot(snapshot => {
      const messagesFirestore = snapshot
        .docChanges()
        .filter(({type}) => type === 'added')
        .map(({doc}) => {
          const msg = doc.data()
          return {...msg, createdAt: msg.createdAt.toDate()}
        })
        .sort((a,b) => (b.createdAt.getTime() - a.createdAt.getTime()))
      appendMessages(messagesFirestore);
    })

    return () => unsubscribe();
  }, [])

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages],
  )

  const handleSend = async (messages) => {
    const writes = messages.map(e => messagesRef.add(e));
    await Promise.all(writes);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={user}
    />
  )
}