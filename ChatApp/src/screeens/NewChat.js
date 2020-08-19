import {StyleSheet, Text, View, SafeAreaView,StatusBar} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {firestore} from '../config/firebase';

const messagesRef = firestore.collection('messages');
const user= {
    _id: 1,
    name: 'DUC',
    avatar: 'https://placeimg.com/140/140/any',
}
const NewChat = () => {
  const [messages, setMessages] = useState([]);

  const getData = useCallback(() => {
    try {
      messagesRef.onSnapshot((snapshot) => {
        const messageDatas = snapshot.docs.map((item) => {
          const message = item.data();
          return {...message, createdAt: message.createdAt.toDate()};
        });
        setMessages(messageDatas);
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const onSend = useCallback((messages = []) => {
      //TODO:UI
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
    //TODO:BACKEND
    
    messagesRef.add({...messages[0],user:user});
  }, []);
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={user}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewChat;

const styles = StyleSheet.create({});

// _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       }