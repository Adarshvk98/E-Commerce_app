import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import {persistStore} from 'redux-persist'
import rootReducer from "./reducers/root.reducer";

const middileware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middileware));
export const persistor = persistStore(store);

export default {store,persistor};
