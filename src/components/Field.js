import React from 'react';
import {TextInput} from 'react-native';
import {base, primary} from './Constants';

const Field = (props, value, onChange) => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: base, paddingHorizontal: 10, paddingVertical: 10, width: '80%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={base}
      value={value}
      onChangeText={onChange}></TextInput>
  );
};

export default Field;