import React from 'react';
import {Card, Text} from 'react-native-paper';

export default function CardPesquisa({item, onPress}) {
  return (
    <Card onPress={() => onPress(item)}>
      <Card.Cover source={item.imagem} onError={() => console.log('Error loading image')} />
      <Card.Content>
        <Text variant="titleLarge">{item.nome}</Text>
        <Text variant="bodyMedium">{item.data}</Text>
      </Card.Content>
    </Card>
  );
}
