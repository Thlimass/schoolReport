import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddStudentScreen = ({ navigation }) => {
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [media, setMedia] = useState('');

  const handleAddStudent = () => {
    // Aqui você pode adicionar a lógica para armazenar os dados em algum lugar
    // Pode ser um estado global (Context API ou Redux) ou AsyncStorage, por exemplo
    // Neste exemplo, apenas exibiremos os dados na próxima tela
    navigation.navigate('ViewStudents', { matricula, nome, media });
  };

  return (
    <View>
      <TextInput
        placeholder="Matrícula"
        value={matricula}
        onChangeText={text => setMatricula(text)}
      />
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Média"
        value={media}
        onChangeText={text => setMedia(text)}
        keyboardType="numeric"
      />
      <Button title="Adicionar Aluno" onPress={handleAddStudent} />
    </View>
  );
};

export default AddStudentScreen;
