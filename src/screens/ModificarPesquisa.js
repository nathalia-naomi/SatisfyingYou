import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Alert, Modal } from 'react-native';
import { TextInput } from 'react-native-paper'
import globalStyles from '../styles/globalStyles';

export default function ModificarPesquisa({ route, navigation }) {
  const {pesquisa} = route.params;

  const [nome, setNome] = useState(pesquisa.nome);
  const [data, setData] = useState(pesquisa.data);
  const [imagem, setImagem] = useState(pesquisa.imagem);
  const [erroNome, setErroNome] = useState('');
  const [erroData, setErroData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const apagarPesquisa = () => {
    setModalVisible(false);
    voltar();
  }

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
    navigation.goBack()
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
      <Button title="Apagar" onPress={()=>setModalVisible(true)} />

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.modalText}>Tem certeza de apagar essa pesquisa?</Text>
              <Button
                style={[stylesModal.button, stylesModal.buttonClose]}
                onPress={apagarPesquisa}
                title="Sim"
              />
              <Button
                style={[stylesModal.button, stylesModal.buttonClose]}
                onPress={() => setModalVisible(false)}
                title="Cancelar"
              />
            </View>
          </View>
        </Modal>
    </View>
  );
};


const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});