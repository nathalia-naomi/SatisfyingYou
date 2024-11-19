import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Relatorio = (props) => {

  const voltar = () => {
    props.navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>Relatório</Text>
    </View>
  );
};

export default Relatorio;