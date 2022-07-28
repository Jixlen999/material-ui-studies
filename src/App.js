import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

function App() {
	return (
		<Grid container className="App">
			<Navbar />
			<Outlet />
		</Grid>
	);
}

export default App;
