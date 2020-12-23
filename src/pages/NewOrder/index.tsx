import React from 'react';
import { View, Text } from 'react-native';
// components
import { Header } from '../../components';
// styles
import styles from './styles';

interface Props {
}

type NewOrderProps = Props;

const NewOrder: React.FunctionComponent<NewOrderProps> = (props) => {
  return (
    <View style={styles.container}>
      <Header
        screenTitle="Nova Ordem"
        hasMenu={false}
      />
      <View style={styles.mainContent}></View>
    </View>
  );
}

export default NewOrder;
