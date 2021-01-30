import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/useResults";

const SearchScreen = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchApi, results, errorMessage] = useResults("");

  const filterResultsByPrice = (price) => {
    // price === "£" || "££" || "£££"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={searchInput}
        onTermChange={setSearchInput}
        onTermSubmit={() => searchApi(searchInput)}
      />
      <ScrollView>
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ResultsList
          results={filterResultsByPrice("£")}
          title="Cheap Places"
        />
        <ResultsList
          results={filterResultsByPrice("££")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("£££")}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("££££")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
