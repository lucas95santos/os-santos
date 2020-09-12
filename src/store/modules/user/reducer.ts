import produce from 'immer';

interface Profile {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  updatedAt: string;

}

export interface UserState {
  profile: Profile;
}

const INITIAL_STATE = {
  profile: null
};

export default function user(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@auth/SIGN_OUT': {
      return produce(state, draft => {
          draft.profile = null;
      });
    }
    default:
      return state;
  }
}
