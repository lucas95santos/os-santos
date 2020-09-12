import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
// styles
import styles from './styles';

interface Props extends TextInputProps {
  placeholder?: string;
  style?: object;
  value: any;
  handleChange: Function;
  multiline?: boolean;
}

interface StyleProps {

}

interface InputRef {
  focus(): void;
}

type InputProps = Props & StyleProps;

const Input: React.RefForwardingComponent<InputRef, InputProps> = (props, ref) => {
  const {
    placeholder,
    value,
    handleChange,
    multiline,
    style,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);

  const styleProps: StyleProps = {};

  return (
    <TextInput
      style={[styles(styleProps).input, focused ? styles(styleProps).inputFocus : null, style]}
      placeholder={placeholder}
      value={value}
      ref={ref as any}
      onChangeText={text => handleChange(text)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline={multiline}
      {...rest}
    />
  );
}

export default forwardRef(Input);
