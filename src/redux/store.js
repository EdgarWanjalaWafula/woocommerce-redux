import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import LocationReducer from './reducers/LocationReducer'
import { composeWithDevTools } from "@redux-devtools/extension";

const root = combineReducers({
	productsReducer, 
	LocationReducer
});
const store = createStore(root, composeWithDevTools(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;