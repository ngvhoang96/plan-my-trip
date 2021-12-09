import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/utility/NavigationBar";
import CustomerView from "./components/CustomerView";
import Home from "./components/Home";

function App() {
	return (
		<div className="container-md">
			<NavigationBar />
			<div className="mt-5">
				<BrowserRouter>
					<Routes>
						<Route path="/account" element={<CustomerView />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
