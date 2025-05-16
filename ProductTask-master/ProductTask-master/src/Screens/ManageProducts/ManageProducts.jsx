import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { ManageProductOptions } from "./data";
import ManageProductCard from "../../Components/Card/ManageCard";
import { useNavigation } from "@react-navigation/native";

function ManageProductsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Manage Products</Text>
      {ManageProductOptions.map((data, index) => {
        return (
          <ManageProductCard
            title={data.title}
            image={data.image}
            key={index}
            onPressEvent={() => navigation.navigate(data.path)}
          />
        );
      })}
    </View>
  );
}

export default ManageProductsScreen;
