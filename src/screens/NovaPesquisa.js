import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import {launchCamera, launchImageLibrary, ImageLibraryOptions} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';

const NovaPesquisa = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorData, setErrorData] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');

  const handleCadastroPesquisa = (nome, data) => {
    setErrorNome(''); setErrorData('');setSucessoMessage('');
    if(nome != '' && data != '') {
        setSucessoMessage('Nova pesquisa registrada!')
    } else {
    if(nome == '') {
        setErrorNome('Preencha o nome da pesquisa');
    }
    if(data == '') {
        setErrorData('Preencha a data');
    }
    }
};

  const handleImagePicker = () => {
    Alert.alert(
      "Selecione",
      "Informe de onde voce quer pegar a foto",
      [
        {
          text: "Galeria",
          onPress: () => pickImageFromGalery(),
          style: "default"
        },
        {
          text: "Camera",
          onPress: () => pickImageFromCamera(),
          style: "default"
        }
      ],
      {
        cancelable: true
      }
    )
  }

  const pickImageFromGalery = async () => {
    const result = await launchImageLibrary(options={mediaType: 'photo'});
  }

  const pickImageFromCamera = async () => {
    const result = await launchCamera(options={mediaType: 'photo'});
  }

  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={globalStyles.title}>Nova pesquisa</Text>
      </View>
      
      <View style={globalStyles.content}>
       
        <Text style={globalStyles.label}>Nome</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Preencha o nome da pesquisa"
          value={nomePesquisa}
          onChangeText={setNomePesquisa}
        />
        {errorNome ? <Text style={globalStyles.errorMessage}>{errorNome}</Text> : null}

        <Text style={globalStyles.label}>Data</Text>
        <TextInput
          style={globalStyles.input}
          value={format(date, 'dd/MM/yyyy')}
          right={<TextInput.Icon icon="calendar-month" size={35} style={{paddingTop: 10}} onPress={() => setOpen(true)}/>}
          editable={false}
        />
        <DatePicker
        title={'Selecione a data'}
        modal
        locale='pt'
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        />
        
        {errorData ? <Text style={globalStyles.errorMessage}>{errorData}</Text> : null}

        <Text style={globalStyles.label}>Imagem</Text>
        <TouchableOpacity style={globalStyles.imageButton} onPress={handleImagePicker}>
          <Text style={{ color: 'black' }}>Câmera/Galeria de imagens</Text>
        </TouchableOpacity>
        
        
        {sucessoMessage ? <Text style={globalStyles.sucessoMessage}>{sucessoMessage}</Text> : null}

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => handleCadastroPesquisa(nomePesquisa, format(date, 'dd/MM/yyyy'))}
        >
          <Text style={globalStyles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default NovaPesquisa;
