import HomeScreen from "../../../Screens/Home/Home";
import ManageProductsScreen from "../../../Screens/ManageProducts/ManageProducts";
import ProductInfoScreen from "../../../Screens/PrdoductInfo/ProductInfo";
import ProfileScreen from "../../../Screens/Profile/Profile";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const BottomTabData = [
  {
    title: "Products",
    comp: HomeScreen,
    options: {
      icon: MaterialIcons,
      iconName: "category",
    },
  },
  // {
  //   title: "Product Details",
  //   comp: ProductInfoScreen,
  //   options: {
  //     icon: MaterialIcons,
  //     iconName: "info",
  //   },
  // },
  {
    title: "Manage",
    comp: ManageProductsScreen,
    options: {
      icon: MaterialIcons,
      iconName: "manage-history",
    },
  },
  {
    title: "Profile",
    comp: ProfileScreen,
    options: {
      icon: MaterialIcons,
      iconName: "supervised-user-circle",
    },
  },
];
