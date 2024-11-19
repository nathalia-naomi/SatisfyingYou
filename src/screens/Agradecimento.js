import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Agradecimento = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Obrigado por participar da pesquisa!</Text>
      <Text style={globalStyles.header}>Aguardamos você no próximo ano!</Text>
    </View>
  );
};

export default Agradecimento;