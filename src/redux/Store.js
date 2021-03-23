import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import Reducer from "./reducers";


const configPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["ReminderReducer","LogReducer"],
};
const reducerPersist = persistReducer(configPersist, Reducer);
const Store = createStore(reducerPersist, applyMiddleware(thunk));
const Persistor = persistStore(Store);

export {Store, Persistor};
