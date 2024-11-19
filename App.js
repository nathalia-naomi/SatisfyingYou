import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NovaConta from './src/screens/NovaConta';
import RecuperarSenha from './src/screens/RecuperarSenha';
import NovaPesquisa from './src/screens/NovaPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Relatorio from './src/screens/Relatorio';
import ColetarDados from './src/screens/ColetarDados';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Agradecimento from './src/screens/Agradecimento';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NovaConta" component={NovaConta} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
        <Stack.Screen name="Relatorio" component={Relatorio} />
        <Stack.Screen name="ColetarDados" component={ColetarDados} />
        <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
        <Stack.Screen name="Agradecimento" component={Agradecimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
