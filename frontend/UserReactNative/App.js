import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import  UserProvider from './context/user';
import GroceryProvider from './context/grocery';

const App = () => {
  return (
    <UserProvider>
      <GroceryProvider>
      <NavigationContainer>
        {/* <ButtomTab /> */}
        <RootStackScreen/>
      </NavigationContainer>
      </GroceryProvider>
    </UserProvider>
  );
}

export default App;