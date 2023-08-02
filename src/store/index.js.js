import { createStore, combineReducers } from 'redux'
import dataReducer from './heroData'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  data: dataReducer,
})

const persisted = persistReducer(persistConfig, rootReducer)

const store = createStore(persisted)

const persistor = persistStore(store)
const storeOptions = { store, persistor }

export default storeOptions