import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ColetarDados = (props) => {
  const modificarPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  }
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>O que você achou do *Nome da Pesquisa*?</Text>
      <Button title="Escolher opções" onPress={modificarPesquisa} />
    </View>
  );
};

export default ColetarDados;