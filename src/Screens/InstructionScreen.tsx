import { Text, TouchableOpacity, View } from 'react-native';

export default function InstructionScreen({ navigation }) {
  return (
    <View className="flex-1 flex-direction flex-col items-center justify-center bg-white space-y-8 px-8">
      <Text className="text-2xl text-center">Use 1 card per pace setting. Each card has 2 questions.</Text>
      <Text className="text-2xl text-center">Prompt your guests to use these questions as a way to get to know their neighbours and have more interesting and meaningful conversations over the table.</Text>

      <Text className="text-2xl font-bold text-blue-500">Ready to begin?</Text>
      <TouchableOpacity className="rounded-3xl bg-green-500 px-10 py-4 h-fit" onPress={() => navigation.navigate('Question')}>
        <View className="flex-2 flex-direction flex-row space-x-2 items-center">
          <Text className="text-white font-medium text-2xl">
            Give me a random question
          </Text>
          <Text className="text-3xl ml-4">
            🎰
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
