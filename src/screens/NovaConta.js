import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import globalStyles from '../styles/globalStyles';  // Importando os estilos globais

const NovaConta = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Bem-vindo ao App!</Text>
      <Text style={globalStyles.subheader}>Aqui está a página inicial.</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Digite algo..."
      />

      <Button title="Entrar" onPress={() => alert('Botão pressionado!')} />
    </View>
  );
};

export default NovaConta;