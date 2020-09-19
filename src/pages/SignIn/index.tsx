import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// redux
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
// components
import { Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

const SignIn: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goTo = (component: string) => {
    navigation.navigate(component);
  }

  const handleSignIn = () => {
    if (email !== '' && password !== '') {
      dispatch(signInRequest(email, password));
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <Image source={require('../../assets/images/logo.png')} />
        <View style={styles.form}>
          <Input
            placeholder="E-mail"
            value={email}
            handleChange={setEmail}
            style={styles.formInput}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current?.focus()
            }}
          />

          <Input
            ref={passwordRef}
            placeholder="Senha"
            value={password}
            handleChange={setPassword}
            style={styles.formInput}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSignIn}
          />

          <Button
            text="Esqueci a senha"
            action={() => goTo('ResetPassword')}
            size={{ width: 132, height: 16 }}
            color={globalStyles.colors.linkColor}
          />

          <Button
            text="Entrar"
            action={handleSignIn}
            size={{ width: '100%', height: 48 }}
            bgColor={globalStyles.colors.buttonBackgroundColor}
            color={globalStyles.colors.buttonTextColor}
            textIsUpper
            style={styles.formButton}
          />
        </View>
        <View style={styles.signUpArea}>
          <Text style={styles.signUpAreaText}>Não tem conta?</Text>
          <Button
            text="Cadastre-se"
            action={() => goTo('SignUp')}
            size={{ width: 106, height: 16 }}
            color={globalStyles.colors.linkColor}
            style={styles.signUpAreaButton}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SignIn;
