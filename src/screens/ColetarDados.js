import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../styles/globalStyles';

const ColetarDados = ({route, navigation}) => {
  const {pesquisa} = route.params;

  const handleChange = item => {
    agradecimentos();
    setTimeout(function(){abrirPesquisa()}, 3000)

  };

  const ratings = [
    {
      id: 'pessimo',
      label: 'Péssimo',
      icon: require('../../assets/images/pessimo.png'),
    },
    {
      id: 'ruim',
      label: 'Ruim',
      icon: require('../../assets/images/ruim.png'),
    },
    {
      id: 'neutro',
      label: 'Neutro',
      icon: require('../../assets/images/neutro.png'),
    },
    {
      id: 'bom',
      label: 'Bom',
      icon: require('../../assets/images/bom.png'),
    },
    {
      id: 'excelente',
      label: 'Excelente',
      icon: require('../../assets/images/excelente.png'),
    },
  ];

  const voltar = () => {
    navigation.goBack();
  };

  const agradecimentos = () => {
    navigation.navigate('Agradecimento');
  }
  const abrirPesquisa = () => {
    navigation.navigate('AcoesPesquisa', {pesquisa: pesquisa});
  };
  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>
        O que você achou do {pesquisa.nome}?
      </Text>
      <FlatList
        data={ratings}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity key={item.id.toString()} onPress={() => handleChange(item)}>
            <Image source={item.icon} />
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ColetarDados;
