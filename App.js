import * as React from "react";
import { View} from 'react-native';
import { DefaultTheme, Button, Text, Provider as PaperProvider } from 'react-native-paper';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//styles
import { Gutters, Layout } from './src/ui/shared/styles'

//screens
import { LoginScreen } from './src/ui/module/login/login'
import { SignupScreen } from './src/ui/module/sign-up/sign-up'



function DetailsScreen({ navigation }) {
  return (
    <View style={Layout.container}>
      <Text>Details Screen</Text>
      <Button mode='contained' style={Gutters.mTop20} raised theme={{ roundness: 6 }}
        onPress={() => navigation.push('Details')}>
        Go to Details... again
    </Button>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196f3',
    accent: '#424242',
    background: '#fff'
  },
};