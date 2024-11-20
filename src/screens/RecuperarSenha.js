import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecuperarSenha = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');

  //valida email
  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  };

  const handleRecoverPassword = (text) => {
    setSucessoMessage('');setErrorMessage('');
    if(validarEmail(text)) {
      setSucessoMessage('Email enviado com sucesso!')
    } else {
      setErrorMessage('E-mail parece ser inválido');
    }
  };

  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={globalStyles.title}>Recuperação de senha</Text>
      </View>

      <View style={globalStyles.content}>
        <Text style={globalStyles.label}>E-mail</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errorMessage ? <Text style={globalStyles.errorMessage}>{errorMessage}</Text> : null}
        {sucessoMessage ? <Text style={globalStyles.sucessoMessage}>{sucessoMessage}</Text> : null}
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => handleRecoverPassword(email)}
        >
          <Text style={globalStyles.buttonText}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};



export default RecuperarSenha
