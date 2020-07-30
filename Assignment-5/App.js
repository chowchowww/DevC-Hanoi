import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);

  const getNew = async () => {
    await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=128ccebef6ac4aa0abd1c38f8576c7d0')
      .then(data => data.json())
      .then(res => setArticle(article.concat(res.article)));
    setLoading(false);
  }

  useEffect(() => {
    getNew()
  }, []);

  const CardPerArticle = () => (
    <View>
      {console.log(article)}
      <Card
        title={article[0].title}
        image={{ uri: article[0].urlToImage }}
      />
    </View>
  )

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size='large'
          loading={loading}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CardPerArticle/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
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
});
