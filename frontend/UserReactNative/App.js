import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import  UserProvider from './context/user';
import GroceryProvider from './context/grocery';
import FlashMessage from "react-native-flash-message";

const App = () => {

  return (
    <UserProvider>
      <GroceryProvider>
      <NavigationContainer>
        {/* <ButtomTab /> */}
        <RootStackScreen/>
        <FlashMessage position="top" />
      </NavigationContainer>
      </GroceryProvider>
    </UserProvider>
  );
}

export default App;