import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import globalStyles from '../styles/globalStyles';
import InputEmail from '../components/InputEmail';

const NovaConta = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const novaConta = () => {
    if (email && senha && senha === confirmarSenha) {
      navegarLogin();
      setErro('');
    } else {
      setErro('O campo repetir senha difere da senha');
    }
  }

  const navegarLogin = () => {
    props.navigation.navigate('Login');
  }

  const voltar = () => {
    props.navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>Nova Conta</Text>
      <InputEmail
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Repetir Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <Text style={globalStyles.errorText}>{erro}</Text>
      <Button title="Cadastrar" onPress={novaConta} />

    </View>
  );
};

export default NovaConta;