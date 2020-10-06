import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// redux
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
// validation
import * as Yup from 'yup';
import { Formik } from 'formik';
// components
import { Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FunctionComponent = () => {
  const passwordRef = useRef<TextInput>(null);

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goTo = (component: string) => {
    navigation.navigate(component);
  }

  const handleSignIn = ({email, password}: FormData) => {
    try {
      dispatch(signInRequest(email, password));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <Image source={require('../../assets/images/logo.png')} />
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={signInSchema}
          onSubmit={values => handleSignIn(values)}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <Input
                placeholder="E-mail"
                value={values.email}
                style={styles.formInput}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef.current?.focus()
                }}
                error={touched.email ? errors.email : null}
              />

              <Input
                ref={passwordRef}
                placeholder="Senha"
                value={values.password}
                style={styles.formInput}
                onChangeText={handleChange('password')}
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => handleSubmit()}
                error={touched.password ? errors.password : null}
              />

              <Button
                text="Esqueci a senha"
                action={() => goTo('ResetPassword')}
                size={{ width: 132, height: 16 }}
                color={globalStyles.colors.linkColor}
              />

              <Button
                text="Entrar"
                action={handleSubmit}
                size={{ width: '100%', height: 48 }}
                bgColor={globalStyles.colors.buttonBackgroundColor}
                color={globalStyles.colors.buttonTextColor}
                textIsUpper
                style={styles.formButton}
              />
            </View>
          )}
        </Formik>

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
