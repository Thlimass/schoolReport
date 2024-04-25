import React from 'react';
import { View, Text } from 'react-native';

const ViewStudentsScreen = ({ route }) => {
  const { matricula, nome, media } = route.params;

  return (
    <View>
      <Text>Matrícula: {matricula}</Text>
      <Text>Nome: {nome}</Text>
      <Text>Média: {media}</Text>
    </View>
  );
};

export default ViewStudentsScreen;
