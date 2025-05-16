import { StyleSheet } from "react-native";
import { colorTheme } from "../../Theme/colorTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.primary,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: colorTheme.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
    elevation: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: colorTheme.black,
    textAlign: "center",
    marginVertical: 8,
  },
  textBox: {
    marginVertical: 4,
  },
  submitBtn: {
    borderRadius: 0,
    marginVertical: 8,
  },
});
