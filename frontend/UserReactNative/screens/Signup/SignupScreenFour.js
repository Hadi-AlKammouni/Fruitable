import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Avatar, Button } from 'react-native-paper';

import styles from './styles';

const SignupScreenFour = () => {

    const [picture,setPicture] = useState(null);

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Create Account</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <View>
                <View >
                    <TouchableHighlight 
                        onPress={() => alert("Pressed")}
                        underlayColor='rgba(0,0,0,0)'>
                        <Avatar.Image
                            size={250}
                            source={{uri: 'data:image/png;base64,' + picture}}
                        />
                    </TouchableHighlight>
                </View>
                <View >
                    <Button mode='contained' >
                        Upload Image
                    </Button>
                    <Button mode='contained' >
                        Remove Image
                    </Button>
                </View>
            </View>

          </Animatable.View>
        </View>
      );
}

export default SignupScreenFour;
