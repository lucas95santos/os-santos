import React, { useState, useRef } from 'react';
import { View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
// redux
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';
// validation
import * as Yup from 'yup';
import { Formik } from 'formik';
// components
import { UnsignedHeader, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FunctionComponent = () => {
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
    confirmPassword: Yup.string().when('password', (password: any, field: any) =>
      password ? field.required('A confirmação senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas não são iguais') : field)
      .required('A confirmação senha é obrigatória'),
  });

  const dispatch = useDispatch();

  const handleSignUp = ({email, password, confirmPassword}: FormData) => {
    try {
      dispatch(signUpRequest(email, password, confirmPassword));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.container}>
        <UnsignedHeader />
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={signUpSchema}
          onSubmit={values => handleSignUp(values)}
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
                autoCompleteType="off"
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
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordRef.current?.focus()
                }}
                error={touched.password ? errors.password : null}
              />

              <Input
                ref={confirmPasswordRef}
                placeholder="Confirme a senha"
                value={values.confirmPassword}
                style={styles.formInput}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => handleSubmit()}
                error={touched.confirmPassword ? errors.confirmPassword : null}
              />

              <Button
                text="Cadastrar"
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SignUp;
