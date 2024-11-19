import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper'
import globalStyles from '../styles/globalStyles';

const ModificarPesquisa = (props) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [imagem, setImagem] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroData, setErroData] = useState('');

  const salvarPesquisa = () => {
    if (!nome) {
      setErroNome('Preencha o nome da pesquisa');
    }
    if (!data) {
      setErroData('Preencha a data');
    }
    if (nome && data) {
      voltar();
    }
  }

  const voltar = () => {
    props.navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>Modificar Pesquisa</Text>
      <TextInput
        label="Nome"
        style={globalStyles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={globalStyles.errorText}>{erroNome}</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Data"
        secureTextEntry
        value={data}
        onChangeText={setData}
      />
      <Text style={globalStyles.errorText}>{erroData}</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Imagem"
        value={imagem}
        onChangeText={setImagem}
      />
      <Button title="Salvar" onPress={salvarPesquisa} />
      <Button title="Apagar" onPress={() => { Alert('Tem certeza de apagar essa pesquisa?') }} />
    </View>
  );
};

export default ModificarPesquisa;