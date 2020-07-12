import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import ListImage from './components/ListImage';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <ListImage />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})