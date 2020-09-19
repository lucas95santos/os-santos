import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// components
import { UnsignedHeader, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

const ResetPassword: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const goTo = (component: string) => {
    navigation.navigate(component);
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.container}>
        <UnsignedHeader />
        <View style={styles.form}>
          <Text style={styles.formTitle}>
            Digite seu e-mail no campo abaixo para solicitar o reset de senha
        </Text>

          <Input
            placeholder="E-mail"
            value={email}
            handleChange={setEmail}
            style={styles.formInput}
          />

          <Button
            text="Solicitar reset"
            action={() => goTo('SignIn')}
            size={{ width: '100%', height: 48 }}
            bgColor={globalStyles.colors.buttonBackgroundColor}
            color={globalStyles.colors.buttonTextColor}
            textIsUpper
            style={styles.formButton}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default ResetPassword;
