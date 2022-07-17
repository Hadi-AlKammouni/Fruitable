import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const ButtonComponent = ({ touchable_style, border_color, text_style, text_color, text, onPress }) => {

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          touchable_style,
          {borderColor:border_color,borderWidth: 1,marginTop: 30}
        ]}
      >
        <Text style={[text_style,{color:text_color}]}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default ButtonComponent;