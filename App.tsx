import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/Screens/WelcomeScreen';
import InstructionScreen from './src/Screens/InstructionScreen';
import QuestionScreen from './src/Screens/QuestionScreen';

export type RootStackParamList = {
  Instructions: undefined,
  Question: { questionId: number } | undefined;
  Welcome: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Instructions"
          component={InstructionScreen}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
