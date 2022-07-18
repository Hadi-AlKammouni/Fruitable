import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTab from '../navigation/ButtomTab';

const Userscreen = () => {
  return (
    <NavigationContainer independent={true}>
      <ButtomTab />
    </NavigationContainer>
  );
}

export default Userscreen;