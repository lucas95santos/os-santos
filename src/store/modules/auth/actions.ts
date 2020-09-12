// signin actions
export function signInRequest(email: string, password: string) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }
  };
}

export function signInSuccess(token: string, user: any) { // TODO: criar interface para user
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  };
}

// signup actions
export function signUpRequest(email: string, password: string, confirmPassword: string) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, password, confirmPassword }
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  };
}
