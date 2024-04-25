import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AddStudentScreen = ({ navigation }) => {
  const [studentRegistration, setStudentRegistration] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentAverage, setStudentAverage] = useState('');

  const handleAddStudent = () => {
    navigation.navigate('ViewStudents', { studentRegistration, studentName, studentAverage });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Sua Matrícula..."
        value={studentRegistration}
        style={styles.textInput}
        onChangeText={text => setStudentRegistration(text)}
      />
      <TextInput
        placeholder="Seu Nome..."
        value={studentName}
        style={styles.textInput}
        onChangeText={text => setStudentName(text)}
      />
      <TextInput
        placeholder="Sua Média..."
        value={studentAverage}
        style={styles.textInput}
        onChangeText={text => setStudentAverage(text)}
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
