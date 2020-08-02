import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TextInput,
  RefreshControl,
} from "react-native";
import CardPerArticle from "./CardPerArticle";
import filterArticles from "../utils/filterArticles";
import filter from "lodash.filter";

export default function News() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [searchArticle, setSearchArticle] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);
  const [query, setQuery] = useState("");
  const key = require("../assets/key.json");

  const contains = ({ title }, q) => {
    if (title.includes(q)) return true;
    return false;
  };

  const handleQuery = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = filter(articles, (item) => contains(item, formattedQuery));
    setSearchArticle(data);
    setQuery('');
  };

  const onTextChange = text => setQuery(text);

  const onRefresh = () => {
    getNew();
  };

  const HeaderBar = () => (
    <View
      style={[
        styles.row,
        {
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginVertical: 5,
          backgroundColor: "#ffffff",
        },
      ]}
    >
      <TextInput
        style={{ height: 20, width: "100%", borderBottomWidth: 0.8 }}
        placeholder="Type here to search"
        blurOnSubmit={false}
        onChangeText={input => onTextChange(input)}
        onSubmitEditing={() => handleQuery(query)}
        value={query}
      />
    </View>
  );

  const EmptyList = () => (
    <View style={{ justifyContent: "center", marginTop: 20 }}>
      <Text style={{ fontSize: 20 }}>No result found :(</Text>
    </View>
  );

  const getNew = async () => {
    if (lastPageReached) return;
    setLoading(true);
    try {
      await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key.key}&page=${pageNumber}`
      )
        .then((data) => data.json())
        .then((res) => {
          const hasMoreArticles = res.articles.length > 0;
          if (hasMoreArticles) {
            const newArticleList = filterArticles(
              articles.concat(res.articles)
            );
            setArticles(newArticleList);
            setPageNumber(pageNumber + 1);
          } else {
            setLastPageReached(true);
          }
        });
    } catch (error) {
      setHasApiError(true);
    } finally {
      setLoading(false);
      setSearchArticle(articles);
    }
  };

  useEffect(() => {
    getNew();
  }, [articles]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" loading={loading} />
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
      <View style={[styles.row, { marginVertical: 10 }]}>
        <Text style={styles.label}>Articles Count:</Text>
        <Text style={styles.info}>{articles.length}</Text>
      </View>
      <HeaderBar />
      {searchArticle.length === articles.length ? (
        <FlatList
          data={searchArticle}
          renderItem={CardPerArticle}
          keyExtractor={(item) => item.title}
          onEndReached={getNew}
          onEndReachedThreshold={1}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => onRefresh()} />
          }
          ListEmptyComponent={EmptyList}
          ListFooterComponent={
            lastPageReached ? (
              <Text style={{ textAlign: "center", marginVertical: 20 }}>
                No more articles
              </Text>
            ) : (
              <ActivityIndicator size="large" loading={loading} />
            )
          }
        />
      ) : (
        <FlatList
          data={searchArticle}
          renderItem={CardPerArticle}
          keyExtractor={(item) => item.title}
          onEndReachedThreshold={1}
          ListEmptyComponent={EmptyList}
          ListFooterComponent={
            lastPageReached ? (
              <Text style={{ textAlign: "center", marginVertical: 20 }}>
                No more articles
              </Text>
            ) : (
              <ActivityIndicator size="large" loading={loading} />
            )
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    height: 30,
    width: "100%",
    backgroundColor: "pink",
  },
  row: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: "grey",
  },
});
