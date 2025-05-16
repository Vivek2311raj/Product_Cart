import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

function ManageProductCard({ title, image, onPressEvent }) {
  return (
    <TouchableHighlight onPress={onPressEvent} underlayColor="white">
      <View style={styles.manageCardContainer}>
        <View>
          <Image
            source={{ uri: image }}
            style={{ height: 150, width: 150, objectFit: "contain" }}
          />
        </View>
        <View>
          <Text style={styles.manageCardContainer.title}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ManageProductCard;
