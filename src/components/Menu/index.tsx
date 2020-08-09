import React from 'react';
import { View, Text } from 'react-native';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
// icons
import { Feather as Icon } from '@expo/vector-icons';

interface Props {
  showMenu: boolean;
  handleMenu: Function;
}

type MenuProps = Props;

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { showMenu, handleMenu } = props;

  return (
    <View
      style={[
        styles.container,
        showMenu ? styles.menuOpen : styles.menuClose
      ]}
      pointerEvents={showMenu ? 'auto' : 'none'}
    >
      <View style={styles.menuTop}>
        <Text style={styles.menuTopText}>Opções</Text>
        <Icon
          name="menu"
          size={32}
          color={`${globalStyles.colors.iconColor}`}
          onPress={() => handleMenu(false)}
        />
      </View>
      <View style={styles.menuOptions}>
        <View style={styles.menuItem}>
          <Icon name="user" size={24} color={`${globalStyles.colors.iconColor}`} />
          <Text style={styles.menuItemText}>Conta</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="lock" size={24} color={`${globalStyles.colors.iconColor}`} />
          <Text style={styles.menuItemText}>Alterar senha</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="help-circle" size={24} color={`${globalStyles.colors.iconColor}`} />
          <Text style={styles.menuItemText}>Dúvidas</Text>
        </View>
      </View>
      <View style={styles.menuBottom}>
        <Icon name="power" size={24} color={`${globalStyles.colors.dangerColor}`} />
        <Text style={styles.menuItemText}>Sair</Text>
      </View>
    </View>
  );
}

export default Menu;
