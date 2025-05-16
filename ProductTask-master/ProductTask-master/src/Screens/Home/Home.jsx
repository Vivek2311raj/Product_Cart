import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Searchbox from "../../Components/Searchbar/Searchbar";
import ProductCard from "../../Components/Card/ProductCard";
import { ProductListApi, ProductListSearchApi } from "../../Api/services";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

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
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
