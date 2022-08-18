import "./App.css";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tour from "./pages/Tour";

function App() {
	return (
		<BrowserRouter>
			<SearchAppBar />
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/about" element={<Tour />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
