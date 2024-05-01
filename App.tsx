import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white space-y-8">
      <Text className="text-4xl">Welcome to Spark Table!</Text>
      <Text className="text-xl">Have meaningful and revealing conversations with anyone</Text>
      <StatusBar style="auto" />
    </View>
  );
};
