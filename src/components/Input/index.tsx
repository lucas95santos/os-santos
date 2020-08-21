import React, { useState } from 'react';
import { TextInput } from 'react-native';
// styles
import styles from './styles';

interface Props {
  placeholder?: string;
  style?: object;
  value: any;
  handleChange: Function;
  multiline?: boolean;
}

interface StyleProps {

}

type InputProps = Props & StyleProps;

const Input: React.FunctionComponent<InputProps> = (props) => {
  const {
    placeholder,
    value,
    handleChange,
    multiline,
    style,
  } = props;

  const [focused, setFocused] = useState(false);

  const styleProps: StyleProps = {};

  return (
    <TextInput
      style={[styles(styleProps).input, focused ? styles(styleProps).inputFocus : null, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={text => handleChange(text)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline={multiline}
    />
  );
}

export default Input;
