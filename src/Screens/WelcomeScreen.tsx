import { Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="flex-1 flex-direction flex-col items-center justify-center bg-white space-y-8">
      <Text className="text-4xl">Welcome to Spark Table 👋</Text>
      <Text className="text-xl">Have meaningful and revealing conversations with anyone</Text>
      <View className="flex-2 flex-row space-x-2 items-center">
        <TouchableOpacity className="rounded-3xl bg-blue-500 px-10 py-4 h-fit" onPress={() => navigation.navigate('Instructions')}>
          <Text className="text-white font-medium text-xl">
            Next
          </Text>
        </TouchableOpacity>
        <Text className="text-3xl">
          ➡️
        </Text>  
      </View>
    </View>
  );
};
