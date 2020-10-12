import { Profile as User } from './reducer';

export function updateUserRequest(firstName: string, lastName: string, phone: string, token: string) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: { firstName, lastName, phone, token }
  };
}

export function updateUserSuccess(user: User) { // TODO: criar interface para user
  return {
    type: '@user/UPDATE_USER_SUCCESS',
    payload: { user }
  };
}
