import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// components
import { UnsignedHeader, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';
// icons
import { Feather as Icon } from '@expo/vector-icons';

const SignUp: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const goTo = (component: string) => {
    navigation.navigate(component);
  }

  return (
    <View style={styles.container}>
      <UnsignedHeader />
      <View style={styles.form}>
        <Input
          placeholder="E-mail"
          value={email}
          handleChange={setEmail}
          style={styles.formInput}
        />

        <Input
          placeholder="Senha"
          value={password}
          handleChange={setPassword}
          style={styles.formInput}
        />

        <Input
          placeholder="Confirme a senha"
          value={password}
          handleChange={setPassword}
          style={styles.formInput}
        />

        <Button
          text="Cadastrar"
          action={() => goTo('Home')}
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

export default SignUp;
