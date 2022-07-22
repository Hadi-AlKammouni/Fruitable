import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTab from './navigation/ButtomTab';
import RootStackScreen from './screens/RootStackScreen';
import  UserProvider from './context/user';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        {/* <ButtomTab /> */}
        <RootStackScreen/>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;