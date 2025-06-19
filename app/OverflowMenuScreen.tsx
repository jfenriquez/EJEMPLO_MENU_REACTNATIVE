import OverflowMenu from "@/components/menus/OverflowMenu";
import React from "react";
import { Text, View } from "react-native";
////MENU DESBORDAMIENTO
const OverflowMenuScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>👋 Bienvenido</Text>
      <OverflowMenu />
    </View>

  );


};

export default OverflowMenuScreen;
