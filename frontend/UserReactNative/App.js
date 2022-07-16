import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTab from './navigation/ButtomTab';
import RootStackScreen from './screens/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <ButtomTab /> */}
      <RootStackScreen/>
    </NavigationContainer>
  );
}

export default App;