import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// components
import { Header, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
// mock
import lastOrders from '../../mocks/lastOrders';

interface Props {
}

type HomeProps = Props;

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const profile = useSelector((state: RootState) => state.user.profile);
  const navigation = useNavigation();

  const goTo = (component: string) => {
    navigation.navigate(component);
  }

  return (
    <View style={styles.container}>
      <Header
        title={`Boa tarde, ${profile.firstName ? profile.firstName : 'Usuário'}`}
        hasMenu
      />
      <View style={styles.mainContent}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Últimas ordens</Text>
        </View>
        <View style={styles.lastOrders}>
          {lastOrders.map(order => (
            <View style={styles.lastOrdersItem} key={order.id}>
              <Text style={styles.lastOrdersItemText}>{order.description}</Text>
              <View>
                <Text style={styles.lastOrdersItemDateText}>{order.date}</Text>
                <Text style={styles.lastOrdersItemDateText}>{order.time}</Text>
              </View>
            </View>
          ))}

          <Button
            text="Ver todas"
            action={() => goTo('Orders')}
            size={{ width: 90, height: 16 }}
            color={globalStyles.colors.linkColor}
            style={styles.ordersLink}
          />
        </View>
      </View>
      <View style={styles.bottomContent}>
        <Button
          text="Nova ordem"
          action={() => goTo('NewOrder')}
          size={{ width: '100%', height: 48 }}
          bgColor={globalStyles.colors.buttonBackgroundColor}
          color={globalStyles.colors.buttonTextColor}
          textIsUpper
        />
      </View>
    </View>
  );
}

export default Home;
