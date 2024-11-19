import React, { useState } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import globalStyles from '../styles/globalStyles'
import InputEmail from '../components/InputEmail'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const login = () => {
    if (email && senha) {
      navegarHome();
      setErro('');
    } else {
      setErro('E-mail e/ou senha inválidos');
    }
  }

  const navegarHome = () => {
    props.navigation.navigate('Home');
  }
  const navegarNovaConta = () => {
    props.navigation.navigate('NovaConta');
  }
  const navegarRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Satisfying.you</Text>
//      add icon

      <InputEmail
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Text style={styles.title}>{erro}</Text>

      <Button title="Entrar" onPress={login} />
      <Button title="Nova Conta" onPress={navegarNovaConta} />
      <Button title="Esqueci minha senha" onPress={navegarRecuperarSenha} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default Login;