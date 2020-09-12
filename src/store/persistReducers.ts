// import storage from 'redux-persist/lib/storage';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

// TODO: criar interface para reducers
export default (reducers: any) => {
  const persistedReducer = persistReducer({
    key: 'os-santos',
    storage: AsyncStorage,
    whitelist: ['auth', 'user']
  }, reducers);

  return persistedReducer;
}
