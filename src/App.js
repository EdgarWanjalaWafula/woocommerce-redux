import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Home from './pages/Home'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import AppHeader from './components/header/AppHeader'
import AppFooter from "./components/footer/AppFooter";

export default function App() {
	return (
		<Provider store={store}>
			<AppHeader />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/faqs" element={<Faqs />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
			<AppFooter />
		</Provider>
	);
}
