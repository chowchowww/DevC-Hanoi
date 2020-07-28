import React from 'react';
import { SafeAreaView } from 'react-native';
import MainTab from './navigation/MainTab';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F4F7'}}>
      <MainTab/>
    </SafeAreaView>
  );
}
