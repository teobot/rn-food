import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.searchIconStyle} name="search" />
      <TextInput
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchIconStyle: {
    color: "black",
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
