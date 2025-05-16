import React from "react";
import { Searchbar } from "react-native-paper";

function Searchbox({ searchQuery, onChange }) {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(text) => onChange(text)}
      value={searchQuery}
    />
  );
}

export default Searchbox;
