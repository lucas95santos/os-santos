import React, { useRef } from 'react';
import { View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
// action
import { updateUserRequest } from '../../store/modules/user/actions';
// validation
import * as Yup from 'yup';
import { Formik } from 'formik';
// components
import { Header, Input, Button } from '../../components';
// global styles
import globalStyles from '../../styles/global';
// styles
import styles from './styles';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
}

const Account: React.FunctionComponent = () => {
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const profile = useSelector((state: RootState) => state.user.profile);
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();

  const accountSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Mínimo de 3 letras para o nome'),
    lastName: Yup.string().min(3, 'Mínimo de 3 letras para o sobrenome'),
    email: Yup.string().email('Insira um email válido'),
    phone: Yup.string()
  });

  const handleSaveInfo = ({ firstName, lastName, phone }: FormData) => {
    try {
      dispatch(updateUserRequest(firstName, lastName, phone, token!));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        title="Conta"
        hasMenu={false}
      />
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView behavior="height">
          <Formik
            initialValues={{
              firstName: profile.firstName || '',
              lastName: profile.lastName || '',
              email: profile.email || '',
              phone: profile.phone || ''
            }}
            validationSchema={accountSchema}
            onSubmit={values => handleSaveInfo(values)}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={styles.mainContent}>
                <Input
                  placeholder="Nome"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  style={styles.formInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    lastNameRef.current?.focus()
                  }}
                  error={touched.firstName ? errors.firstName : null}
                />

                <Input
                  ref={lastNameRef}
                  placeholder="Sobrenome"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  style={styles.formInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    emailRef.current?.focus()
                  }}
                  error={touched.lastName ? errors.lastName : null}
                />

                <Input
                  ref={emailRef}
                  placeholder="E-mail"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  style={styles.formInput}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    phoneRef.current?.focus()
                  }}
                  editable={false}
                  disabled
                  error={touched.email ? errors.email : null}
                />

                <Input
                  ref={phoneRef}
                  placeholder="Telefone"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  style={styles.formInput}
                  keyboardType="phone-pad"
                  returnKeyType="send"
                  onSubmitEditing={() => handleSubmit()}
                  error={touched.phone ? errors.phone : null}
                />

                <Button
                  text="Salvar informações"
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
    </View>
  );
}

export default Account;
