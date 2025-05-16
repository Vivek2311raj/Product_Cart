import React, { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "./styles";
import { AddProductApi } from "../../Api/services";

function TextFieldBox({ placeholder, label, name, value, onChange }) {
  return (
    <TextInput
      style={styles.textBox}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      value={value?.value}
      onChangeText={(value) => onChange(name, value)}
    />
  );
}

function AddProductScreen() {
  const [productdData, setProductData] = useState({});

  const handleProductData = (name, value) => {
    setProductData({ ...productdData, [name]: value });
  };

  const addProductData = async () => {
    let payload = { ...productdData };
    await AddProductApi(payload)
      .then((res) => {
        if (res.status === 200) {
          console.log("Product Added Successfully");
        } else {
          console.log("Something Went Wrong!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        onPress={addProductData}
      >
        Add Product
      </Button>
    </View>
  );
}

export default AddProductScreen;
