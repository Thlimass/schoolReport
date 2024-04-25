import React from 'react';
import { StyleSheet, Text, View, TextInput, Content } from 'react-native';

const ViewStudentsScreen = ({ route }) => {
  const { studentRegistration, studentName, studentAverage } = route.params;

  return (
  <View style={styles.container}>
      <Text style={styles.titleView}>Informações do Aluno</Text>
      <View style={styles.view}>
        <Text style={styles.textLabel}>Matrícula:</Text>
        <Text style={styles.textContent}>{studentRegistration}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.textLabel}>Nome:</Text>
        <Text style={styles.textContent}>{studentName}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.textLabel}>Média:</Text>
        <Text style={styles.textContent}>{studentAverage}</Text>
      </View>
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
  titleView: {
  paddingTop:15,
  color:'#fff',
  fontSize:20,
  fontWeight:'bold',
  marginBottom:50
  },
  view: {
  width:'100%',
  flexDirection:'row',
  borderBottomColor:'#c0c0c0',
  borderBottomWidth:1,
  marginBottom: 10
  },
  textLabel: {
  color:'white',
  fontWeight:'bold',
  paddingLeft:10,
  marginBottom: 10
  },
  textContent: {
    color:'white',
    paddingLeft:10
  }
});

export default ViewStudentsScreen;
