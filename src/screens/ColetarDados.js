import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ColetarDados({route, navigation}) {
  const {pesquisa} = route.params;
  
  const voltar = () => {
    navigation.goBack()
  }
  
  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>O que você achou do {pesquisa.nome}?</Text>
    </View>
  );
};