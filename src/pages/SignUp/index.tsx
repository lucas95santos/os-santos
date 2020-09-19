import React, { useState, useRef } from 'react';
import { View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
// redux
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';
// components
import { UnsignedHeader, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

const SignUp: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (email !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        dispatch(signUpRequest(email, password, confirmPassword));
      }
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.container}>
        <UnsignedHeader />
        <View style={styles.form}>
          <Input
            placeholder="E-mail"
            value={email}
            handleChange={setEmail}
            style={styles.formInput}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
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
            returnKeyType="next"
            onSubmitEditing={() => {
              confirmPasswordRef.current?.focus()
            }}
          />

          <Input
            ref={confirmPasswordRef}
            placeholder="Confirme a senha"
            value={confirmPassword}
            handleChange={setConfirmPassword}
            style={styles.formInput}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSignUp}
          />

          <Button
            text="Cadastrar"
            action={handleSignUp}
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

export default SignUp;
