import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const Home = (props) => {

    // Simulação de dados de pesquisa
    const researchData = [
        { title: 'SECOMP 2023', date: '10/10/2023', image: require('../../assets/images/secomp-icon.png') },
        { title: 'UBUNTU 2022', date: '05/06/2022', image: require('../../assets/images/ubuntu-icon.png') },
        { title: 'MENINAS CPU', date: '01/04/2022', image: require('../../assets/images/meninas-icon.png') }
    ];

    const showNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const showAcoesPesquisa = (titulo, data) => {
        props.navigation.navigate('AcoesPesquisa', { screen: titulo, date: data })
    }

    return (
        
        <View style={globalStyles.container}>
        
            <View style={globalStyles.searchContainer}>
                <View style={globalStyles.inputContainer}>
                    <Image source={require('../../assets/icons/search-icon.png')} style={globalStyles.searchIcon} />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Insira o termo de busca..."
                    />
                </View>
                <TouchableOpacity style={globalStyles.searchButton}>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                style={globalStyles.scrollContainer} 
            >
                {researchData.map((research, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={globalStyles.researchCard}
                        onPress={() => {showAcoesPesquisa(research.title)}} >
                        <Image source={research.image} style={globalStyles.cardImage} resizeMode="contain" />
                        <Text style={[globalStyles.title, { color: '#3F92C5' }]}>{research.title}</Text>
                        <Text style={globalStyles.date}>{research.date}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={globalStyles.button}
                onPress={showNovaPesquisa} >
                <Text style={globalStyles.buttonText}>NOVA PESQUISA</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Home;
