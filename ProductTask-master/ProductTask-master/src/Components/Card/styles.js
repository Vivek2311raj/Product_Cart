import { StyleSheet } from "react-native";
import { colorTheme } from "../../Theme/colorTheme";

export const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginVertical: 4,
    backgroundColor: colorTheme.white,
    height: 200,
    borderRadius: 8,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
  },
  descContainer: {
    flex: 1,
    title: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 4,
      color: colorTheme.secondary,
      letterSpacing: 1,
    },
    brand: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 4,
      color: colorTheme.primary,
    },
    category: {
      fontSize: 15,
      fontWeight: "400",
      marginBottom: 4,
      color: colorTheme.black,
      textTransform: "capitalize",
    },
    actionContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      Button: {
        borderRadius: 5,
        marginTop: 20,
      },
    },
  },
  manageCardContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colorTheme.grey,
    padding: 8,
    marginVertical: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    title: {
      color: colorTheme.grey,
      fontSize: 20,
      fontWeight: "500",
      letterSpacing: 1,
    },
  },
});
