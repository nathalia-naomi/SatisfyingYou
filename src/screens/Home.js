import React from 'react';
import { View, Button, TextInput } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Home = props => {
  const novaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  };

  const voltar = () => {
    props.navigation.goBack();
  };
  
  return (
    <View style={globalStyles.container}>
      {/* substituir por menu */}
      <Button title="Voltar" onPress={voltar} />

      <TextInput
        style={globalStyles.input}
        placeholder="Insira o termo de busca"
      />

      <Button title="Nova Pesquisa" onPress={novaPesquisa} />
    </View>
  );
};

export default Home;