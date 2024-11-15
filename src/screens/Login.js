import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import globalStyles from '../styles/globalStyles'
import Botao from '../components/Botao'
import Input from '../components/InputEmail'


 // Função de validação simples
  /*const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }*/
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 

    // Simulação de sucesso no login
    Alert.alert('Sucesso', 'Você entrou com sucesso!');
    // Aqui você pode redirecionar para outra tela ou fazer autenticação real
  

  const navegarHome = () => {
      props.navigation.navigate('Home')
  }
  const voltar =()=>{
      props.navigation.navigate('Login')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Satisfying.you</Text>

      <TextInput
        label="E-mail"
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
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

      
<Button title="Entrar" onPress={navegarHome} />


      <Text style={styles.footerText}>Esqueceu a senha?</Text>
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