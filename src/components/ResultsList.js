import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ResultDetails from "../components/ResultDetails";

import { withNavigation } from "react-navigation";

const ResultsList = ({ results, title, navigation }) => {
  if (!results.length) return null;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResultsShow", {
                id: item.id,
              })
            }
          >
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginBottom: 5,
  },
  viewStyle: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
