import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert, ToastAndroid } from 'react-native';
// services
import api from '../../../services/api';
// actions
import { updateUserSuccess } from './actions';

export function* updateUser({ payload }: any) {
  try {
    const { firstName, lastName, phone, token } = payload;

    const response = yield call(api.put, 'users/', {
      firstName,
      lastName,
      phone
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    yield put(updateUserSuccess(response.data));

    ToastAndroid.show('Atualizado com sucesso!', 1);
  } catch (err) {
    console.log(err);
    Alert.alert('Erro ao atualizar', 'Verifique suas informções');
  }
}

export default all([
  takeLatest('@user/UPDATE_USER_REQUEST', updateUser)
]);
