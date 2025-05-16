import React, { useContext } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import OverAllNavs from "../Components/Common/Navigator/BottomTabs";
import StackNav from "../Components/Common/Navigator/StackNav";
import { AuthContext } from "../Context/AuthContext";

function RouterConfig() {
  const { loginStatus } = useContext(AuthContext);
  const isLoggedIn = loginStatus;

  return (
    <View style={styles.container}>
      {isLoggedIn ? <OverAllNavs /> : <StackNav />}
    </View>
  );
}

export default RouterConfig;
