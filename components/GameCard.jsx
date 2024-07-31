import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { useEffect, useRef } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link asChild href={`${game.slug}`}>
      <StyledPressable
        className="active:opacity-70 border border-black
       active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4"
      >
        <View className="flex-row p-4 gap-4" key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2" style={styles.description}>
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }} index={index}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginBottom: 10,
  },
  safeAreaView: {
    margin: 12,
  },
});
