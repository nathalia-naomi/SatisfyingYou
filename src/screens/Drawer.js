import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigator = createDrawerNavigator();

const Drawer = (props) => {

  const email = props.route.params.email;

  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerActiveTintColor: 'darkslateblue',
        headerTitleStyle: {
          fontSize: 35,
          color: 'white',
          marginLeft: 10,
          fontFamily: 'AveriaLibre-Regular'
        },
        drawerLabelStyle: { fontSize: 50, color: 'white', fontFamily: 'AveriaLibre-Regular' },
        drawerStyle: { backgroundColor: 'darkslateblue', width: '40%', fontFamily: 'AveriaLibre-Regular' },
        headerBackground: () => (
          <View style={{
            alignItems: 'center',
            marginBottom: 5,
            backgroundColor: 'darkslateblue',
            height: 60,
            paddingHorizontal: 20
          }} />
        ),
      }}

      drawerContent={(props) =>

        <DrawerContentScrollView {...props}>
          <View style={globalStyles.emailContainer}>
            <Text style={globalStyles.emailText}>{email}</Text>
          </View>
          <View style={globalStyles.separator}></View>
          <DrawerItem icon={({ focused, color, size }) => (
            <Icon
              name="description"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          )} labelStyle={{ color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular' }} label="Pesquisas" onPress={() => { props.navigation.goBack() }} />

          <DrawerItem style={globalStyles.sair} icon={({ focused, color, size }) => (
            <Icon
              name="login"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          )} labelStyle={globalStyles.labelSair} label="Sair" onPress={() => { props.navigation.popToTop() }} />
        </DrawerContentScrollView>

      }>
      <DrawerNavigator.Screen name="Pesquisas" component={Home} />

    </DrawerNavigator.Navigator>
  );
};



export default Drawer;