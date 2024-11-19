import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function AcoesPesquisa({ route, navigation }) {
  const {pesquisa} = route.params;

  const modificarPesquisa = () => {
    navigation.navigate('ModificarPesquisa', {pesquisa: pesquisa});
  }

  const coletarDados = () => {
    navigation.navigate('ColetarDados', {pesquisa: pesquisa});
  }

  const relatorio = () => {
    navigation.navigate('Relatorio', {pesquisa: pesquisa});
  }

  const voltar = () => {
    navigation.goBack()
  }
  
  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>{pesquisa.nome}</Text>
      <Button title="Modificar" onPress={modificarPesquisa} />
      <Button title="Coletar dados" onPress={coletarDados} />
      <Button title="Relatório" onPress={relatorio} />
    </View>
  );
};