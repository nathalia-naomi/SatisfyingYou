import React from 'react';
import {Alert} from 'react-native';
import { Card, Text } from 'react-native-paper';

const CardPesquisa = ({nomePesquisa, dataPesquisa}) => {
  return (
    <Card onPress={()=>Alert.alert("pressed")}>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Content>
        <Text variant="titleLarge">{nomePesquisa}</Text>
        <Text variant="bodyMedium">{dataPesquisa}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardPesquisa;
