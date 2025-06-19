import React from "react";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";


// app/_layout.tsx

export default function Layout() {
  return (
    <Drawer screenOptions={{ headerShown: true }} initialRouteName="index">
      <Drawer.Screen name="index" options={{ title: "MENU" }} />
      <Drawer.Screen
        name="ContextualMenuScreen"
        options={{ title: "💬 Menú Contextual" }}
      />
      <Drawer.Screen name="DropdownScreen" options={{ title: "⬇️ Dropdown" }} />
      <Drawer.Screen
        name="(tabsB)"
        options={{ title: "🗂OTRO Menú TABS" }}
      />
      <Drawer.Screen name="OverflowMenuScreen" options={{ title: "⋮ Menú Desbordamiento" }} />
      <Drawer.Screen name="ActionSheetScreen" options={{ title: "📄 Action Sheet" }} />
      <Drawer.Screen name="FABMenuScreen" options={{ title: "➕ FAB Menu o Speed Dial" }} />
      <Drawer.Screen name="NestedMenuScreen" options={{ title: "📁 Menú Anidado" }} />

      <Drawer.Screen
        name="(tabsC)"
        options={{ title: "🗂 Menú de Pestañas TABS-C" }}
      />
      <Drawer.Screen
        name="+not-found"
        options={{
          drawerItemStyle: { display: "none" },
          title: "404"
        }}
      />

    </Drawer>
  );
}
