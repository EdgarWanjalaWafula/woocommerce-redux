import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const root = combineReducers({
	ProductsReducer
});
const store = createStore(root, composeWithDevTools());
export default store;