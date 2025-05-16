import React, { useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AuthContext } from "../../Context/AuthContext";
import { Button } from "react-native-paper";

function ProfileScreen() {
  const { updateLoginStatus } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome user!</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => updateLoginStatus(false)}
      >
        Logout
      </Button>
    </View>
  );
}

export default ProfileScreen;
