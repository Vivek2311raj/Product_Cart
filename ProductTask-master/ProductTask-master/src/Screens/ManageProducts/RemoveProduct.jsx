import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Searchbox from "../../Components/Searchbar/Searchbar";
import ProductCard from "../../Components/Card/ProductCard";
import {
  DeleteProductApi,
  ProductListApi,
  ProductListSearchApi,
} from "../../Api/services";
import { useNavigation } from "@react-navigation/native";

function RemoveProductScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const navigation = useNavigation();

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  const getProductListData = async () => {
    await ProductListApi()
      .then((res) => {
        if (res.status === 200) {
          const newData = res.data.products;
          if (Array.isArray(newData)) {
            setProductList(newData);
            setFilteredList(newData);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSearchResultData = async () => {
    await ProductListSearchApi(searchQuery)
      .then((res) => {
        if (res.status === 200) {
          const newData = res.data.products;
          setFilteredList(newData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeProductFunc = async (productId) => {
    await DeleteProductApi(productId)
      .then((res) => {
        if (res.status === 200) {
          console.log("Product Remove Successfull");
          navigation.navigate("Home");
        } else {
          console.log("Something went wrong!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductListData();
  }, []);

  useEffect(() => {
    if (searchQuery.length) {
      getSearchResultData();
    } else {
      setFilteredList(productList);
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbox searchQuery={searchQuery} onChange={handleSearchQuery} />
      </View>
      <View style={styles.productContainer}>
        <ScrollView style={styles.scrollView}>
          {filteredList.map((data, index) => {
            return (
              <ProductCard
                id={data.id}
                key={data.id}
                image={data.images[0]}
                title={data.title}
                brand={data.brand}
                category={data.category}
                type="remove product"
                removeProductFunc={() => removeProductFunc(data.id)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default RemoveProductScreen;
