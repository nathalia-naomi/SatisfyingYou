import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import NovaConta from "./src/screens/NovaConta"




const Stack = createStackNavigator()

const App =() => {

return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}> 
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NovaConta" component={NovaConta} />
        </Stack.Navigator>
    </NavigationContainer>
)

}


export default App