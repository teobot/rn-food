import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/businesses/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log("ERROR");
    }
  };

  if (result === null) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <Text style={styles.header}>{result.name}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }} />
        )}
        keyExtractor={(photo) => photo}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
  },
  imageStyle: {
    height: 150,
    width: 300,
  },
});

export default ResultsShowScreen;
