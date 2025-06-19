import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const tabItems = [
  { name: "index", label: "Inicio", icon: "home" },
  { name: "profile", label: "Perfil", icon: "person" },
  { name: "settings", label: "Ajustes", icon: "settings" },
];

export default function AnimatedTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true, // <- importante
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={
                tabItems.find((item) => item.name === route.name)?.icon ||
                "alert"
              }
              size={24}
              color={isFocused ? "#6200EE" : "#aaa"}
            />
            <Text
              style={{ color: isFocused ? "#6200EE" : "#aaa", fontSize: 12 }}
            >
              {tabItems.find((item) => item.name === route.name)?.label ??
                label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
  },
});
