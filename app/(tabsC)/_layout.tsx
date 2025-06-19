import { Tabs } from "expo-router";

import AnimatedTabBar from "../../components/menus/AnimatedTabBar";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    />
  );
}
