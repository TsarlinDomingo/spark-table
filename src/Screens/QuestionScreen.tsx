import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { questions } from '../questions';
import { RootStackParamList } from '../../App';
import { getAnotherId } from '../utils';

type QuestionScreenProps = NativeStackScreenProps<RootStackParamList, 'Question'>

export default function QuestionScreen({ route, navigation }: QuestionScreenProps) {
  const questionId = route.params?.questionId
  const question = (questionId && questions.find((question) => question.id === questionId)) || questions[0];
  return (
    <View className="flex-1 flex-direction flex-col items-center justify-center bg-blue-500 h-full space-y-8 px-6">
      <Text className="text-9xl">{question.icon}</Text>
      <Text className="text-white text-4xl mb-8 text-center">{question.prompt}</Text>
      <TouchableOpacity className="rounded-3xl bg-green-500 px-10 py-4 h-fit" onPress={() => navigation.navigate('Question', { questionId: getAnotherId(question.id) })}>
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
