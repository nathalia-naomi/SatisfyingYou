import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import globalStyles from '../styles/globalStyles'
import Botao from '../components/Botao'
import Input from '../components/InputEmail'
import InputEmail from '../components/InputEmail'

const RecuperarSenha = (props) => {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const recuperarSenha = () => {
    if (email) {
      voltar();
    } else {
      setErro('E-mail parece ser inválido');
    }
  }

  const voltar = () => {
    props.navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Button title="<-" onPress={voltar} />
      <Text style={globalStyles.header}>Recuperação de Senha</Text>
      
      <InputEmail
        value={email}
        onChangeText={setEmail}
      />
      <Text style={globalStyles.errorText}>{erro}</Text>

      <Button title="Recuperar" onPress={recuperarSenha} />

    </View>
  );
};

export default RecuperarSenha;