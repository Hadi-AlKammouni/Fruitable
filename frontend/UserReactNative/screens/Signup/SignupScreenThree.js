import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';

const SignupScreenThree = ({ navigation, route }) => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const { firstName, lastName, gender,email, password, confirmPassword} = route.params;

    const data = [
        { label: 'Beirut', value: 5 },
        { label: 'Jbeil', value: 6 },
        { label: 'Baalbeck', value: 7 },
        { label: 'Haret Hreik', value: 10 },
        { label: 'Saida', value: 9 },
    ];

    const renderLabel = () => {        
        return (
            <Text style={[styles.label, isFocus]}>
              Choose Your Country
            </Text>
        );
    }
    

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Create Account</Text>
          </View>
    
          <Animatable.View style={styles.footer} animation="fadeInUpBig">

            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Country' : '...'}
                searchPlaceholder="Search..."
                value={latitude}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setLatitude(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? '#FDBE3B' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />

            <Dropdown
                style={[styles.dropdown, isFocus ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Country' : '...'}
                searchPlaceholder="Search..."
                value={longitude}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setLongitude(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? '#FDBE3B' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
            
            {/* Continue Button */}
            <ButtonComponent 
              onPress={() => navigation.navigate("SignupScreenFour",{firstName,lastName,gender,email,password,confirmPassword,latitude,longitude}) }
              touchable_style={styles.button}
              border_color="#FDBE3B"
              text_style={styles.textSign}
              text_color="#FFFFFF"
              text="Continue"
            />
          </Animatable.View>
        </View>
    );
}
  
export default SignupScreenThree;
  