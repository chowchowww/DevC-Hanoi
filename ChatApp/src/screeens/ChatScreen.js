import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {firestore,database} from '../config/firebase';

const DEFAULT = [
  {
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

    const getMessage= ()=>{
        database.ref('/messages/' + 1).once('value').then(snapshot=>{
          let doc=snapshot.val();
          console.log(doc);
        })
        
        // firestore.collection('messages').onSnapshot(snapshot=>{
        //     const datas=snapshot.docs;
        //     // const datas=snapshot.docs.map(item=>{
        //     //     return {

        //     //     }
        //     // })
        //     console.log(datas);
        // })
    }

  useEffect(() => {
    setMessages(DEFAULT);
    //const refMessages = database.ref('messages');
    // refMessages.onSnapshot(snapshot=>{
    //   console.log(snapshot.docs);
    // })
    //console.log(refMessages);
    
  }, []);

  // useEffect(() => {
  //   getMessage()
  // }, [])

  const onSend = (messages) => {
      setMessages(prev=>GiftedChat.append(prev,messages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
