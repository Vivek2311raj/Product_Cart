import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button, TextInput } from "react-native-paper";
import { AuthApi } from "../../Api/services";
import { AuthContext } from "../../Context/AuthContext";

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

function LoginScreen() {
  const [userData, setUserData] = useState({});
  const { updateLoginStatus } = useContext(AuthContext);

  const handleUserData = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const submitUserData = () => {
    // let payload = {
    //   username: userData.username,
    //   password: userData.password,
    // };
    // await AuthApi(payload)
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (userData.username == "kminchelle" && userData.password == "0lelplR") {
      updateLoginStatus(true);
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Login</Text>
        <TextFieldBox
          placeholder="Enter Username"
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleUserData}
        />
        <TextFieldBox
          placeholder="Enter Password"
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleUserData}
        />
        <Button
          style={styles.submitBtn}
          mode="contained"
          onPress={submitUserData}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

export default LoginScreen;
