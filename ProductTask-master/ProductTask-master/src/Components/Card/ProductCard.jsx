import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function ProductCard({
  id,
  image,
  title,
  brand,
  category,
  type,
  removeProductFunc,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: 170, height: 170, objectFit: "contain" }}
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descContainer.title}>{title}</Text>
        <Text style={styles.descContainer.brand}>{brand}</Text>
        <Text style={styles.descContainer.category}>{category}</Text>
        <View style={styles.descContainer.actionContainer}>
          {type === "remove product" ? (
            <Button
              // icon="camera"
              mode="contained"
              onPress={removeProductFunc}
              style={styles.descContainer.actionContainer.Button}
            >
              Remove
            </Button>
          ) : (
            <>
              <Button
                // icon="camera"
                mode="contained"
                onPress={() =>
                  navigation.navigate("Edit Product", {
                    itemId: id,
                  })
                }
                style={styles.descContainer.actionContainer.Button}
              >
                Edit
              </Button>
              <Button
                // icon="camera"
                mode="outlined"
                onPress={() =>
                  navigation.navigate("Product Details", {
                    itemId: id,
                  })
                }
                style={styles.descContainer.actionContainer.Button}
              >
                Info
              </Button>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

export default ProductCard;
