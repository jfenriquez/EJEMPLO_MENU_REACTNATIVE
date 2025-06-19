// app/menu.tsx
import React, { FC } from "react";
import { Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { MotiView } from "moti";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Menu: FC = () => {

  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Opción Drawer */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 300, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Pressable onPress={openDrawer} style={styles.pressable}>
          <Text style={styles.linkText}>☰ Abrir Drawer</Text>
        </Pressable>
      </MotiView>

      {/* Opción Menú Contextual */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 500, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="./ContextualMenuScreen" style={styles.link}>
          <Text style={styles.linkText}>💬 Menú Contextual</Text>
        </Link>
      </MotiView>

      {/* Opción Dropdown */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 700, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="/DropdownScreen" style={styles.link}>
          <Text style={styles.linkText}>🔽 Dropdown</Text>
        </Link>
      </MotiView>

      {/* Menú de Pestañas (Tab Menu) */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 900, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="/(tabsB)" style={styles.link}>
          <Text style={styles.linkText}>🗂 Menú de Pestañas</Text>
        </Link>
      </MotiView>

      {/* Menú de Desbordamiento (Overflow Menu) */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1100, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>⋮ Menú Desbordamiento</Text>
        </Link>
      </MotiView>

      {/* Action Sheet (Hoja de Acción) */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1300, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>📄 Action Sheet (Hoja de Acción)</Text>
        </Link>
      </MotiView>

      {/* FAB Menu o Speed Dial */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1500, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>➕ FAB Menu o Speed Dial</Text>
        </Link>
      </MotiView>

      {/* Menú Anidado */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1700, type: "timing", duration: 500 }}
        style={styles.menuItem}
      >
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>📁 Menú Anidado</Text>
        </Link>
      </MotiView>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0f7fa",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  menuItem: {
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  pressable: {
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  link: {
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  linkText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#00796b",
  },
});
