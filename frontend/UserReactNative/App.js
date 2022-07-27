import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import  UserProvider from './context/user';
import GroceryProvider from './context/grocery';
import registerNNPushToken from 'native-notify';

const App = () => {

  registerNNPushToken(3343, '5MVe2pBuNkF25Ck9aVb66d');

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