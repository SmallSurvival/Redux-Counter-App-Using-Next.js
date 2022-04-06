import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter: counterReducer,
});
const persistConfig = {
    key: 'persist-key',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});
// const store=createStore(persistReducer,applyMiddleware(ReduxThunk))
const persistor = persistStore(store)
export default store
export { persistor }