import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import CardPerArticle from './CardPerArticle';
import filterArtice from '../utils/filterArticles';

export default function News() {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);
  const key = require('../assets/key.json');

  const getNew = async () => {
    if (lastPageReached) return;
    setLoading(true);
    try {
      await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key.key}&page=${pageNumber}`)
        .then(data => data.json())
        .then(res => {
          const hasMoreArticles = res.articles.length > 0;
          if (hasMoreArticles) {
            const newArticleList = filterForUniqueArticles(
              articles.concat(res.articles)
            );
            setArticles(newArticleList);
            setPageNumber(pageNumber + 1);
          } else {
            setLastPageReached(true)
          }
        });
    } catch (error) {
      setHasApiError(true)
    } finally {
    setLoading(false);
    }
  }

  useEffect(() => {
    getNew()
  }, [articles]);

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

  if (hasErrored) {
    return (
      <View style={styles.container}>
        <Text>Error =(</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Articles Count:</Text>
        <Text style={styles.info}>{articles.length}</Text>
      </View>
      <FlatList
        data={articles}
        renderItem={CardPerArticle}
        keyExtractor={item => item.title }
        onEndReached={getNew}
        onEndReachedThreshold={1}
        ListFooterComponent={ lastPageReached ?
          <Text style={{ textAlign: 'center'}}>No more articles</Text> : <ActivityIndicator size="large" loading={loading} />}
      />
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
