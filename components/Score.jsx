import { Text, View } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return "bg-red-500";
    if (percentage < 65) return "bg-yeloww-500";
    return "bg-green-500";
  };

  const className = getColors();

  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center mb-3`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
