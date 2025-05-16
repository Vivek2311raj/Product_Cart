import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BottomTabData } from "./TabData";
import { Text, View } from "react-native";
import { colorTheme } from "../../../Theme/colorTheme";
import ProductInfoScreen from "../../../Screens/PrdoductInfo/ProductInfo";
import AddProductScreen from "../../../Screens/ManageProducts/AddProduct";
import EditProductScreen from "../../../Screens/ManageProducts/EditProduct";
import HomeScreen from "../../../Screens/Home/Home";
import RemoveProductScreen from "../../../Screens/ManageProducts/RemoveProduct";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarStyle: {
    height: 60,
    paddingVertical: 8,
  },
};

const tabBarLabelStyles = {
  fontSize: 14,
  marginBottom: 4,
  fontWeight: "500",
};

export function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {BottomTabData.map((data, index) => {
        return (
          <Tab.Screen
            name={data.title}
            component={data.comp}
            key={index + data.title}
            options={{
              tabBarLabel: (tabLabelInfo) => (
                <Text
                  style={{
                    ...tabBarLabelStyles,
                    color: tabLabelInfo.focused
                      ? colorTheme.secondary
                      : colorTheme.primary,
                  }}
                >
                  {data.title}
                </Text>
              ),
              tabBarIcon: (tabInfo) => {
                return (
                  <View>
                    <data.options.icon
                      name={data.options.iconName}
                      size={25}
                      color={
                        tabInfo.focused
                          ? colorTheme.secondary
                          : colorTheme.primary
                      }
                    />
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const OverAllNavs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home--"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductInfoScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Add Product"
        component={AddProductScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Edit Product"
        component={EditProductScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Remove Product"
        component={RemoveProductScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default OverAllNavs;
