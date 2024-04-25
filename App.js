import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddStudentScreen from './screens/AddStudentScreen';
import ViewStudentsScreen from './screens/ViewStudentsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="AddStudent">
        <Stack.Screen name="AddStudent" component={AddStudentScreen} options={{ title: 'Adicionar Aluno' }} />
        <Stack.Screen name="ViewStudents" component={ViewStudentsScreen} options={{ title: 'Alunos Registrados' }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
