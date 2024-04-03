import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import AppHeader from './components/header/AppHeader'
import AppFooter from "./components/footer/AppFooter";

import { fetchProducts } from './api/fetchProducts';
store.dispatch(fetchProducts)

export default function App() {
	return (
		<Provider store={store}>
			<AppHeader />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/faqs" element={<Faqs />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/shop" element={<Shop />} />
			</Routes>
			<AppFooter />
		</Provider>
	);
}
