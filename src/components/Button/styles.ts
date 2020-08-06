import { StyleSheet } from 'react-native';

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

const styles = (props: StyleProps) => StyleSheet.create({
  button: {
    flex: props.size?.flex,
    width: props.size?.width,
    height: props.size?.height,
    backgroundColor: props.bgColor,
    borderWidth: props.bordered ? 2 : 0,
    borderColor: props.bordered ? props.bgColor : 'transparent',
    borderRadius: props.transparent ? 4 : 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: props.color,
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    textTransform: props.textIsUpper ? 'uppercase' : 'none'
  }
});

export default styles;
