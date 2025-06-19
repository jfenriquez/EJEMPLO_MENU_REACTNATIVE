// DropdownMenu.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MotiView } from "moti";

const DropdownMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleMenu}>
        <Text style={styles.buttonText}>Selecciona una opción</Text>
      </TouchableOpacity>
      {open && (
        <MotiView
          style={styles.dropdown}
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 300 }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpen(false);
              console.log("Opción A");
            }}
          >
            <Text style={styles.item}>Opción A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpen(false);
              console.log("Opción B");
            }}
          >
            <Text style={styles.item}>Opción B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpen(false);
              console.log("Opción C");
            }}
          >
            <Text style={styles.item}>Opción C</Text>
          </TouchableOpacity>
        </MotiView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 20 },
  button: { backgroundColor: "#3498db", padding: 15, borderRadius: 8 },
  buttonText: { color: "white", textAlign: "center" },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
    marginTop: 5,
    padding: 10,
  },
  item: { paddingVertical: 8, paddingHorizontal: 10 },
});

export default DropdownMenu;
