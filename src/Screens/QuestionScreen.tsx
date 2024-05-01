import { Text, View } from "react-native";

export default function QuestionScreen() {
  return (
    <View className="flex-1 flex-direction flex-col items-center justify-center bg-blue-500 h-full space-y-8">
      <Text className="text-9xl">💢</Text>
      <Text className="text-white text-4xl mb-8 text-center">What makes you angrier than it perhaps should?</Text>
    </View>
  );
};
