import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

const AcoesPesquisa = (props) => {

  const modificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa');
  }

  const coletarDados = () => {
    props.navigation.navigate('ColetarDados');
  }

  const relatorio = () => {
    props.navigation.navigate('Relatorio');
  }

  const voltar = () => {
    props.navigation.goBack()
  }
  
  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>Nome da pesquisa</Text>
      <Button title="Modificar" onPress={modificarPesquisa} />
      <Button title="Coletar dados" onPress={coletarDados} />
      <Button title="Relatório" onPress={relatorio} />
    </View>
  );
};

export default AcoesPesquisa;