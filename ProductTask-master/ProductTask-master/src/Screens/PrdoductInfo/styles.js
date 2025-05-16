import { StyleSheet } from "react-native";
import { colorTheme } from "../../Theme/colorTheme";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    backgroundColor: colorTheme.white,
    elevation: 1,
    borderRadius: 8,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 390,
  },
  detailsContainer: {
    padding: 8,
    borderWidth: 0.5,
    borderColor: colorTheme.grey,
    title: {
      color: colorTheme.secondary,
      fontSize: 20,
      fontWeight: "600",
      letterSpacing: 1,
      textTransform: "capitalize",
      marginTop: 8,
    },
    stocks: {
      marginTop: 8,
      color: colorTheme.grey,
      fontSize: 16,
      fontWeight: "400",
      textTransform: "capitalize",
    },
    description: {
      color: colorTheme.black,
      fontSize: 16,
      fontWeight: "500",
      textTransform: "capitalize",
      marginBottom: 8,
      lineHeight: 24,
    },
    rating: {
      color: colorTheme.grey,
      fontSize: 16,
      fontWeight: "500",
      textTransform: "capitalize",
      marginBottom: 8,
    },
    button: {
      borderRadius: 2,
      elevation: 1,
    },
    priceSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      marginTop: 8,
      originalPrice: {
        color: colorTheme.green,
        fontSize: 19,
        fontWeight: "500",
        textTransform: "capitalize",
      },
      offerPrice: {
        color: colorTheme.grey,
        fontSize: 16,
        fontWeight: "400",
        textTransform: "capitalize",
      },
      percentage: {
        color: colorTheme.red,
        fontSize: 15,
        fontWeight: "400",
        textTransform: "capitalize",
      },
    },
    brandSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginVertical: 8,
      brand: {
        color: colorTheme.grey,
        fontSize: 17,
        fontWeight: "400",
        textTransform: "capitalize",
      },
      line: {
        color: colorTheme.grey,
      },
      category: {
        color: colorTheme.grey,
        fontSize: 17,
        fontWeight: "400",
        textTransform: "capitalize",
      },
    },
  },
});
