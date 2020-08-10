import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';
// components
import Menu from '../Menu';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
// icons
import { Feather as Icon } from '@expo/vector-icons';

interface Props {
  title: string;
  hasMenu: boolean;
}

type HeaderProps = Props;

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // props
  const { title, hasMenu } = props;
  // states
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = useNavigation();

  const handleMenu = () => {

  }

  const goBack = () => {
    navigation.goBack();
  }

  const getDate = () => {
    return moment().format('LL');
  }

  const getTime = () => {
    return moment().format('LT');
  }

  useEffect(() => {
    setDate(getDate());
    setTime(getTime());

    const interval = setInterval(() => {
      setTime(getTime());
    }, 60000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={hasMenu ? handleMenu : goBack}
          >
            {hasMenu ? (
              <Icon
                name="menu"
                size={32}
                color={`${globalStyles.colors.iconColor}`}
                onPress={() => setMenuOpen(true)}
              />
            ) : (
                <Icon name="arrow-left" size={32} color={`${globalStyles.colors.iconColor}`} />
              )}
          </TouchableOpacity>
          <Image source={require('../../assets/images/logo_horizontal.png')} />
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infoAreaDetails}>
            <View style={styles.infoAreaDetailsItem}>
              <Icon name="calendar" size={16} color={`${globalStyles.colors.iconColor}`} />
              <Text style={styles.detailItemText}>{date}</Text>
            </View>
            <View style={styles.infoAreaDetailsItem}>
              <Icon name="clock" size={16} color={`${globalStyles.colors.iconColor}`} />
              <Text style={styles.detailItemText}>{time}</Text>
            </View>
          </View>
        </View>
      </View>

      <Menu showMenu={menuOpen} handleMenu={setMenuOpen} />
    </>
  );
}

export default Header;
