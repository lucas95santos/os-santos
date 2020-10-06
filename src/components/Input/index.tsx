import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
// icons
import { MaterialIcons as Icon } from '@expo/vector-icons';
// styles
import styles from './styles';
// global styles
import globalStyles from '../../styles/global';

interface Props extends TextInputProps {
  placeholder?: string;
  style?: object;
  value: any;
  multiline?: boolean;
  error?: string | null;
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
    multiline,
    style,
    error,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);

  const styleProps: StyleProps = {};

  return (
    <View style={[styles(styleProps).containerInput, style]}>
      <TextInput
        style={[
          styles(styleProps).input,
          focused ? styles(styleProps).inputFocus : null,
          error ? styles(styleProps).inputError : null
        ]}
        placeholder={placeholder}
        value={value}
        ref={ref as any}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        multiline={multiline}
        {...rest}
      />
      {error &&
        <View style={styles(styleProps).errorContainer}>
          <Icon
            name="error-outline"
            style={styles(styleProps).iconError}
          />
          <Text style={styles(styleProps).errorText}>{error}</Text>
        </View>
      }
    </View>
  );
}

export default forwardRef(Input);
