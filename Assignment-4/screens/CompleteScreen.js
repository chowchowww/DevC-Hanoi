import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CompleteScreen() {
  return(
    <View style={styles.container}>
      <Text>Complete Screen</Text>
    </View>
  )
}

CompleteScreen.navigationOption={
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});