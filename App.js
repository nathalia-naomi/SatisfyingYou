import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import RecuperarSenha from './src/screens/RecuperarSenha';
import Home from './src/screens/Home';
import Drawer from './src/screens/Drawer';
import NovaPesquisa from './src/screens/NovaPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import ColetarDados from './src/screens/ColetarDados';

import Relatorio from './src/screens/Relatorio';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, headerBackVisible: false }}>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Nova Conta' component={NovaConta}  />
        <Stack.Screen name='RecuperarSenha' component={RecuperarSenha}  />
        <Stack.Screen name='Drawer' component={Drawer}  />
        <Stack.Screen name='Home' component={Home}  />
        <Stack.Screen name='NovaPesquisa' component={NovaPesquisa}  />
        <Stack.Screen name='AcoesPesquisa' component={AcoesPesquisa} />
        <Stack.Screen name='ModificarPesquisa' component={ModificarPesquisa} />
        <Stack.Screen name='ColetarDados' component={ColetarDados} />
       <Stack.Screen name='Relatorio' component={Relatorio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
