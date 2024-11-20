import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisa = (props) => {

  const titulo = props.route.params.screen;

  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>
      <View style={globalStyles.header}>
          <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={globalStyles.title}>{titulo}</Text>
      </View>
        
        <View style={globalStyles.buttonsContainer}>
            <TouchableOpacity style={globalStyles.button} onPress={() => props.navigation.navigate('ModificarPesquisa')}>
            <Icon name="edit-document" size={30} color="white" />
            <Text style={globalStyles.buttonText}>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.button} onPress={() => props.navigation.navigate('Coleta', { screen: titulo })}>
            <Icon name="library-add-check" size={30} color="white" />
            <Text style={globalStyles.buttonText}>Coletar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.button} onPress={() => props.navigation.navigate('Relatorio')}>
            <Icon name="donut-large" size={30} color="white" />
            <Text style={globalStyles.buttonText}>Relatório</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};


export default AcoesPesquisa;
