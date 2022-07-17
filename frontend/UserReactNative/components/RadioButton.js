import React, {useState} from 'react';
import { View, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const RadioButton = () => {
    
  const [gender, setGender] = useState(null);

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <View>
      <Text style={{fontSize: 18, marginTop:30}}> Enter You Gender </Text>
      <RadioForm
        style={{
          marginTop: 15,
        }}
        labelStyle={{
          left: 15,
        }}
        circleSize={12}
        labelHorizontal={true}
        buttonColor={"#000000"}
        selectedButtonColor = '#FDBE3B'
        radio_props={genders}
        onPress={(value) => {setGender(value);}}
        />
    </View>
  );
}

export default RadioButton;


