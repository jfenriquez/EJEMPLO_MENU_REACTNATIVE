// ContextualMenu.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { MotiView } from "moti";

const ContextualMenu: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onLongPress = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    setMenuPosition({ x: pageX, y: pageY });
    setVisible(true);
  };

  const hideMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text>mantener precionado</Text>
      <TouchableOpacity style={styles.item} onLongPress={onLongPress}>
        <Text>Realiza un long press aquí</Text>
      </TouchableOpacity>
      {visible && (
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={hideMenu}>
          <MotiView
            style={[styles.menu, { top: 100, left: 50 }]}
            from={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 300 }}
          >
            <TouchableOpacity
              onPress={() => {
                hideMenu();
                console.log("Opción 1");
              }}
            >
              <Text style={styles.menuItem}>Opción 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                hideMenu();
                console.log("Opción 2");
              }}
            >
              <Text style={styles.menuItem}>Opción 2</Text>
            </TouchableOpacity>
          </MotiView>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: { padding: 20, backgroundColor: "#ddd", borderRadius: 10 },
  menu: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
    padding: 10,
  },
  menuItem: { paddingVertical: 5, paddingHorizontal: 10 },
});

export default ContextualMenu;
