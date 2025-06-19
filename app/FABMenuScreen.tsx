import { FabMenu } from "@/components/menus/FabMenu";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const FABMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a tu App 🚀</Text>
      <FabMenu />
    </View>)
};

export default FABMenuScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 60,
  },
});
