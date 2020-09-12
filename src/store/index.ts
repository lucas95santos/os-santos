import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { AuthState } from './modules/auth/reducer';
import { UserState } from './modules/user/reducer';

import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface RootState {
  auth: AuthState;
  user: UserState;
}

// configs
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancer = applyMiddleware(...middlewares);
const store = createStore(persistReducers(rootReducer), enhancer);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
