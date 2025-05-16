import { StyleSheet } from "react-native";
import { colorTheme } from "../../Theme/colorTheme";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    borderRadius: 5,
    height: 720,
  },
  title: {
    marginBottom: 16,
    fontSize: 28,
    fontWeight: "600",
    color: colorTheme.grey,
  },
});
