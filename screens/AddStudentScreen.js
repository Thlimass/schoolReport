import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        placeholder="Sua Matrícula..."
        value={matricula}
        style={styles.textInput}
        onChangeText={text => setMatricula(text)}
      />
      <TextInput
        placeholder="Seu Nome..."
        value={nome}
        style={styles.textInput}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Sua Média..."
        value={media}
        style={styles.textInput}
        onChangeText={text => setMedia(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btnAddStudent} onPress={handleAddStudent}>
         <Text style={{color:'white', textAlign:'center'}}>Adicionar Aluno</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput: {
  width:'100%',
  height:40,
  backgroundColor:'white',
  borderRadius:20,
  paddingLeft:10,
  marginBottom: 10
  },
  btnAddStudent: {
  width:'100%',
  height:40,
  backgroundColor:'#7b42f5',
  borderRadius:20,
  justifyContent:'center'
 }
});

export default AddStudentScreen;
