import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
// services
import api from '../../../services/api';
// import history from '../../../services/history';
// actions
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }: any) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'users/auth', {
      email,
      password
    });

    const { token, user } = response.data;

    // if (!user.active) {
    //   yield put(signFailure());
    //   Alert.alert('Erro de autenticação', 'Usuário desativado');
    //   return;
    // }

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
    // Alert.alert('Sucesso', `Bem vindo(a), ${user.name}`);
  } catch (err) {
    Alert.alert('Erro de autenticação', 'Verifique suas credenciais');
    yield put(signFailure());
  }
}

export function* signUp({ payload }: any) {
  try {
    const { email, password, confirmPassword } = payload;

    yield call(api.post, 'users', {
      email,
      password,
      confirmPassword
    });

    // history.push('/entrar');
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Verifique seus dados');
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
