import { Image, StyleSheet, Platform, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TabTreeScreen from "./explore2";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
//import { View } from "lucide-react-native";
import Animated, {
  FadeInLeft,
  FadeOutLeft,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import ContextualMenu from "@/components/menus/ContextualMenu";
import DropdownMenu from "@/components/menus/DropdownMenu";

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  ////genera colores
  const tabs = ["#b89978", "#533d8a", "#538156", "#b4a554"];

  return (
    <SafeAreaView style={styles.Container}>
      <LayoutAnimationConfig skipEntering>
        <Animated.View
          key={`tab-content-${selectedIndex}`}
          entering={FadeInLeft.springify().damping(80).stiffness(200)}
          exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
          style={
            (styles.animatedBackground,
            [
              {
                backgroundColor: tabs[selectedIndex],
                flex: 1,
                width: "80%", // Asegura que ocupe todo el ancho
                height: "100%", // Asegura que ocupe todo el alto
                borderRadius: 8,

                justifyContent: "center", // Centra verticalmente
                alignItems: "center", // Centra horizontalmente
              },
            ])
          }
        >
          <Text>{selectedIndex}</Text>
        </Animated.View>
      </LayoutAnimationConfig>

      <TabTreeScreen
        data={[
          { icon: "AlarmClock", label: "text1" },
          { icon: "ArrowUp", label: "text2" },
          { icon: "Activity", label: "text3" },
          { icon: "Airplay", label: "text4" },
        ]}
        onChange={(index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1, // Ocupa toda la pantalla
    //justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
  },
  animatedBackground: {
    ...StyleSheet.absoluteFillObject, // Hace que ocupe toda la pantalla
  },
});
