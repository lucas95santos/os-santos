import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// styles
import styles from './styles';

interface Props {
  text: string;
  action: any; // colocar tipo certo depois
  style?: object;
}

interface StyleProps {
  size?: {
    flex?: number;
    width?: number | string;
    height?: number;
  }
  bgColor?: string;
  color: string;
  transparent?: boolean;
  bordered?: boolean;
  textIsUpper?: boolean;
}

type ButtonProps = Props & StyleProps;

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    text,
    action,
    style,
    size,
    bgColor,
    color,
    transparent,
    bordered,
    textIsUpper
  } = props;

  const styleProps = {
    size,
    bgColor,
    color,
    transparent,
    bordered,
    textIsUpper
  };

  return (
    <TouchableOpacity
      style={[styles(styleProps).button, style]}
      onPress={action}
    >
      <Text style={styles(styleProps).text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
