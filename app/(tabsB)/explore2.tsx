/////TODO:ESTO ES UN COMPONENT, NO UN SCREEN ERROR

import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Pressable,
  ViewStyle,
} from "react-native";

import { icons } from "lucide-react-native";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";
import { motify, MotiProps, MotiView } from "moti";

type IconNames = keyof typeof icons;

type TabItem = {
  icon: IconNames;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackColor?: string;
  inactiveBackColor?: string;
};

type IconProps = {
  name: IconNames;
} & MotiProps;

function Icon({ name, ...rest }: IconProps) {
  /* const IconComponent = motify(icons[name])();

  return <IconComponent size={35} {...rest} />; */
  const IconDef = icons[name];

  if (!IconDef) {
    console.warn(`Icon "${name}" not found in lucide-react-native.`);
    return null;
  }

  const IconComponent = motify(IconDef)();
  return <IconComponent size={35} {...rest} />;
}

export default function TabTreeScreen({
  data,
  selectedIndex,
  onChange,
  activeColor = "#060606",
  inactiveColor = "#6D6D6D",
  activeBackColor = "#FFB703",
  inactiveBackColor = "#8ECAE6",
}: TabsProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        gap: 4,
        position: "absolute",
        bottom: 50,
      }}
    >
      {data.map((item, index) => {
        const IsSelected = selectedIndex === index;
        return (
          <MotiView
            key={index}
            layout={LinearTransition.springify().damping(80).springify(200)}
            animate={{
              backgroundColor: IsSelected ? activeBackColor : inactiveBackColor,
              borderRadius: 50,
            }}
          >
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: 4 * 2,
                justifyContent: "center",
                gap: 4,
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 50,
                backgroundColor: IsSelected
                  ? activeBackColor
                  : inactiveBackColor,
                borderWidth: 2, // Grosor del borde
                borderColor: "#000000", // Color negro para el borde
              }}
            >
              <Icon
                name={item.icon}
                animate={{
                  color: IsSelected ? activeColor : inactiveColor,
                }}
              />
              {IsSelected && (
                <Animated.Text
                  entering={FadeInRight.springify().damping(80).stiffness(200)}
                  exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
                  style={{
                    color: IsSelected ? activeColor : inactiveColor,
                    fontWeight: IsSelected ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </Animated.Text>
              )}
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
}
