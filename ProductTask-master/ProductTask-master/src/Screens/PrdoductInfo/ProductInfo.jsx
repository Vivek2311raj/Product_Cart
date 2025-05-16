import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { ProductListApi } from "../../Api/services";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import OverAllNavs from "../../Components/Common/Navigator/BottomTabs";

function ProductInfoScreen({ route }) {
  const navigation = useNavigation();
  const { itemId } = route.params;
  const [productData, setProductData] = useState({});
  const [imgUrl, setImgUrl] = useState("");

  const fetchProductData = async () => {
    await ProductListApi()
      .then((res) => {
        if (res.status === 200) {
          const newData = res.data.products;
          let filterData = newData.filter((item) => item.id === itemId);
          if (filterData.length) {
            setProductData(filterData[0]);
            setImgUrl(filterData[0].images[0]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, [itemId]);

  return (
    <View style={styles.container}>
      {Object.keys(productData).length ? (
        <>
          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={{ width: 300, height: 300, objectFit: "contain" }}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsContainer.title}>
              {productData.title}
            </Text>
            <View style={styles.detailsContainer.priceSection}>
              <Text style={styles.detailsContainer.priceSection.originalPrice}>
                {productData.price}
              </Text>
              <Text style={styles.detailsContainer.priceSection.offerPrice}>
                {productData.price}
              </Text>
              <Text style={styles.detailsContainer.priceSection.percentage}>
                ({Math.round(productData.discountPercentage)}%)
              </Text>
            </View>
            <Text style={styles.detailsContainer.stocks}>
              Stocks Only : {productData.stock}
            </Text>
            <View style={styles.detailsContainer.brandSection}>
              <Text style={styles.detailsContainer.brandSection.brand}>
                ({productData.brand}
              </Text>
              <Text style={styles.detailsContainer.brandSection.line}>|</Text>
              <Text style={styles.detailsContainer.brandSection.category}>
                {productData.category})
              </Text>
            </View>
            <Text style={styles.detailsContainer.description}>
              {productData.description}
            </Text>
            <Text style={styles.detailsContainer.rating}>
              Ratings {productData.rating}
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Product")}
              style={styles.detailsContainer.button}
            >
              Buy Now
            </Button>
          </View>
        </>
      ) : (
        <Text>No product data info selected</Text>
      )}
    </View>
  );
}

export default ProductInfoScreen;
