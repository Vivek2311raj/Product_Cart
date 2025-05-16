import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RouterConfig from "./src/Router/RouterConfig";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/Context/AuthContext";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthContextProvider>
          <RouterConfig />
          <StatusBar style="auto" />
        </AuthContextProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
