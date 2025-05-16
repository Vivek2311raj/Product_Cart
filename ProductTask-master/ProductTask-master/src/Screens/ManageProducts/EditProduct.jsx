import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "./styles";
import { EditProductApi, ProductListApi } from "../../Api/services";

function TextFieldBox({ placeholder, label, name, value, onChange }) {
  return (
    <TextInput
      style={styles.textBox}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      value={value?.toString()}
      onChangeText={(value) => onChange(name, value)}
    />
  );
}

function EditProductScreen({ route }) {
  const [productdData, setProductData] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const { itemId } = route.params;

  const handleProductData = (name, value) => {
    setProductData({ ...productdData, [name]: value });
  };

  const updateProductData = async () => {
    let payload = { ...productdData };
    await EditProductApi(itemId, payload)
      .then((res) => {
        if (res.status === 200) {
          console.log("Product Updated Successfully");
        } else {
          console.log("Something Went Wrong!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <View style={styles.formContainer}>
      <TextFieldBox
        placeholder="Enter Product ID"
        label="Product ID"
        name="id"
        value={productdData.id}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Name"
        label="Product Name"
        name="title"
        value={productdData.title}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Brand"
        label="Product Brand"
        name="brand"
        value={productdData.brand}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Category"
        label="Product Category"
        name="category"
        value={productdData.category}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Description"
        label="Product Description"
        name="description"
        value={productdData.description}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Price"
        label="Product Price"
        name="price"
        value={productdData.price}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Discount %"
        label="Product Discount %"
        name="discountPercentage"
        value={productdData.discountPercentage}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Rating"
        label="Product Rating"
        name="rating"
        value={productdData.rating}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Stock"
        label="Product Stock"
        name="stock"
        value={productdData.stock}
        onChange={handleProductData}
      />
      <TextFieldBox
        placeholder="Enter Product Thumbnail"
        label="Product Thumbnail"
        name="thumbnail"
        value={productdData.thumbnail}
        onChange={handleProductData}
      />
      <Button
        style={styles.submitBtn}
        mode="contained"
        onPress={updateProductData}
      >
        Update Product Details
      </Button>
    </View>
  );
}

export default EditProductScreen;
