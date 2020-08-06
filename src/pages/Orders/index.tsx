import React from 'react';
import { View, Text } from 'react-native';
// components
import { Header } from '../../components';
// styles
import styles from './styles';

interface Props {
}

type OrderProps = Props;

const Orders: React.FunctionComponent<OrderProps> = (props) => {
  return (
    <View style={styles.container}>
      <Header
        title="Ordens"
        hasMenu={false}
      />
      <View style={styles.mainContent}></View>
    </View>
  );
}

export default Orders;
