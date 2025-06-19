// app/index.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Menu from "../components/menus/MenuInicial";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,width:"auto", justifyContent: "center", alignItems: "center" },
  title: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
});
