import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

  const navigation = useNavigation();

  const goTo = (component: string) => {
    navigation.navigate(component);
  }

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
        <View>
          <TouchableOpacity onPress={() => goTo('Account')} style={styles.menuItem}>
            <Icon name="user" size={24} color={`${globalStyles.colors.iconColor}`} />
            <Text style={styles.menuItemText}>Conta</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => goTo('ChangePassword')} style={styles.menuItem}>
            <Icon name="lock" size={24} color={`${globalStyles.colors.iconColor}`} />
            <Text style={styles.menuItemText}>Alterar senha</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => goTo('Questions')} style={styles.menuItem}>
            <Icon name="help-circle" size={24} color={`${globalStyles.colors.iconColor}`} />
            <Text style={styles.menuItemText}>Dúvidas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => goTo('SignIn')} style={styles.menuBottom}>
          <Icon name="power" size={24} color={`${globalStyles.colors.dangerColor}`} />
          <Text style={styles.menuItemText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Menu;
