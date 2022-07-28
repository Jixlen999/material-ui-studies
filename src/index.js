import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./components/pages/Authentication/Authentication";
import Database from "./components/pages/Database/Database";
import Storage from "./components/pages/Storage/Storage";
import Hosting from "./components/pages/Hosting/Hosting";
import Functions from "./components/pages/Functions/Functions";
import MachineLearning from "./components/pages/MachineLearning/MachineLearning";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="authentication" element={<Authentication />} />
				<Route path="database" element={<Database />} />
				<Route path="storage" element={<Storage />} />
				<Route path="hosting" element={<Hosting />} />
				<Route path="functions" element={<Functions />} />
				<Route path="machine-learning" element={<MachineLearning />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
