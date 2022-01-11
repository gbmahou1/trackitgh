
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import { AuthProvider } from "./Providers/auth";
import RegisterPage from "./ResgisterPage";

function App() {
  return (
		<BrowserRouter>
			<AuthProvider>
				
				<Routes>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/cadastro" element={<RegisterPage />}></Route>
				</Routes>

			</AuthProvider>
		</BrowserRouter>
  );
}

export default App;
