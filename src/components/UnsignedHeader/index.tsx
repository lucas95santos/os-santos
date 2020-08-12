import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
// icons
import { Feather as Icon } from '@expo/vector-icons';

interface Props {
}

type UnsignedHeaderProps = Props;

const UnsignedHeader: React.FunctionComponent<UnsignedHeaderProps> = (props) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.topArea}>
      <TouchableOpacity
        onPress={goBack}
        style={styles.back}
      >
        <Icon
          name="arrow-left"
          size={32}
          color={`${globalStyles.colors.headerColor}`}
        />
      </TouchableOpacity>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
}

export default UnsignedHeader;
