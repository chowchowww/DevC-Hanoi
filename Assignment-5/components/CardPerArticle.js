import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';

export default function CardPerArticle({ item }){
  const onPress = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        supported ? Linking.openURL(url) : console.log(`Dont know how to open url: ${url}`);
      })
  }

  return (
    <View>
      <Card title={item.title ? item.title : ""} image={{ uri: item.urlToImage ? item.urlToImage : "https://via.placeholder.com/400x200" }}>
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{item.source?.name}</Text>
        </View>
        <Text style={{ marginBottom: 10 }}>{item.content ? item.content : ""}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format('LLL')}
          </Text>
        </View>
        <Button
          icon={<Icon />}
          title="Read more"
          backgroundColor="#03A9F4"
          onPress={() => onPress(item.url)}
        />
      </Card>
    </View>
)};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },
})