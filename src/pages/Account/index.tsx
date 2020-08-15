import React, { useState } from 'react';
import { View } from 'react-native';
// components
import { Header, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

const Account: React.FunctionComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Header
        title="Conta"
        hasMenu={false}
      />
      <View style={styles.mainContent}>
        <Input
          placeholder="Nome"
          value={firstName}
          handleChange={setFirstName}
          style={styles.formInput}
        />

        <Input
          placeholder="Sobrenome"
          value={lastName}
          handleChange={setLastName}
          style={styles.formInput}
        />

        <Input
          placeholder="E-mail"
          value={email}
          handleChange={setEmail}
          style={styles.formInput}
        />

        <Input
          placeholder="Telefone"
          value={phone}
          handleChange={setPhone}
          style={styles.formInput}
        />

        <Button
          text="Salvar informações"
          action={() => {}}
          size={{ width: '100%', height: 48 }}
          bgColor={globalStyles.colors.buttonBackgroundColor}
          color={globalStyles.colors.buttonTextColor}
          textIsUpper
          style={styles.formButton}
        />
      </View>
    </View>
  );
}

export default Account;
