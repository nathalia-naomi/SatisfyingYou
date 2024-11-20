import React from 'react';
import {View, Button, TextInput, FlatList} from 'react-native';
import globalStyles from '../styles/globalStyles';
import CardPesquisa from '../components/CardPesquisa';

const Home = props => {
  const mockData = [
    {
      id: '1',
      nome: 'Meninas Digitais CPU',
      data: '01/04/2022',
      imagem: require('../../assets/images/meninas-digitais.png'),
      ratings: [
        {id: 1, value: 'pessimo', count: 0},
        {id: 2, value: 'ruim', count: 0},
        {id: 3, value: 'neutro', count: 0},
        {id: 4, value: 'bom', count: 0},
        {id: 5, value: 'excelent', count: 0}
      ]
    },
    {
      id: '2',
      nome: 'Secomp 2023',
      data: '1010/2023',
      imagem: require('../../assets/images/secomp.png'),
      ratings: [
        {id: 1, value: 'pessimo', count: 0},
        {id: 2, value: 'ruim', count: 0},
        {id: 3, value: 'neutro', count: 0},
        {id: 4, value: 'bom', count: 0},
        {id: 5, value: 'excelent', count: 0}
      ]
    },
    {
      id: '3',
      nome: 'Ubuntu 2022',
      data: '05/06/2022',
      imagem: require('../../assets/images/ubuntu.png'),
      ratings: [
        {id: 1, value: 'pessimo', count: 0},
        {id: 2, value: 'ruim', count: 0},
        {id: 3, value: 'neutro', count: 0},
        {id: 4, value: 'bom', count: 0},
        {id: 5, value: 'excelent', count: 0}
      ]
    },
  ];

  const abrirPesquisa = item => {
    props.navigation.navigate('AcoesPesquisa', {pesquisa: item});
  };

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

      <FlatList
        data={mockData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CardPesquisa item={item} onPress={abrirPesquisa} />
        )}
      />

      <Button title="Nova Pesquisa" onPress={novaPesquisa} />
    </View>
  );
};

export default Home;