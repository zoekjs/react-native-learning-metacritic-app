import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { InfoIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/9- mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod
          tempor incididunt ut labore et. Lore mauris tempor incidididunt ut
          labore et. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Text className="text-white text-white/9- mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod
          tempor incididunt ut labore et. Lore mauris tempor incidididunt ut
          labore et. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Text className="text-white text-white/9- mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod
          tempor incididunt ut labore et. Lore mauris tempor incidididunt ut
          labore et. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Text className="text-white text-white/9- mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod
          tempor incididunt ut labore et. Lore mauris tempor incidididunt ut
          labore et. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Text className="text-white text-white/9- mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod
          tempor incididunt ut labore et. Lore mauris tempor incidididunt ut
          labore et. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
      </ScrollView>
    </Screen>
  );
}
