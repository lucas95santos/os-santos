import React from 'react';
import { View, Text, FlatList } from 'react-native';
// components
import { Header } from '../../components';
// styles
import styles from './styles';
// mock
import allOrders from '../../mocks/allOrders';

interface Props {
}

type OrderProps = Props;

const Orders: React.FunctionComponent<OrderProps> = (props) => {

  const renderItem = ({ item }: any) => (
    <View style={styles.allOrdersItem}>
      <Text style={styles.allOrdersItemText}>{item.description}</Text>
      <View>
        <Text style={styles.allOrdersItemDateText}>{item.date}</Text>
        <Text style={styles.allOrdersItemDateText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title="Ordens"
        hasMenu={false}
      />
      <View style={styles.mainContent}>
        <Text style={styles.sortBy}>Ordenar por:</Text>

        <FlatList
          data={allOrders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Orders;
