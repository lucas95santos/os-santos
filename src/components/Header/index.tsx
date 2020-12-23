import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
// hooks
import useDateTime from '../../hooks/useDateTime';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
// icons
import { Feather as Icon } from '@expo/vector-icons';
// utils
import generatingGreetings from '../../utils/generateGreetings';

interface Props {
  title?: string;
  screenTitle?: string;
  hasMenu: boolean;
}

type HeaderProps = Props;

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // props
  const { title, screenTitle, hasMenu } = props;
  // states
  const [date, time] = useDateTime();

  const navigation = useNavigation();

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  const goBack = () => {
    navigation.goBack();
  }

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
              />
            ) : (
                <Icon name="arrow-left" size={32} color={`${globalStyles.colors.iconColor}`} />
              )}
          </TouchableOpacity>
          <Image source={require('../../assets/images/logo_horizontal.png')} />
        </View>
        <View style={styles.infoArea}>
          {title && (
            <Text style={styles.title}>
              {`${generatingGreetings(time)}, ${title}`}
            </Text>
          )}

          {screenTitle && (
            <Text style={styles.title}>
              {screenTitle}
            </Text>
          )}
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

      {/* <Menu showMenu={menuOpen} handleMenu={setMenuOpen} /> */}
    </>
  );
}

export default Header;
