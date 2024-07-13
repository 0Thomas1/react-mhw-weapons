import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weapons from "./pages/Weapons";
import ErrorPage from "./pages/ErrorPage";
import WeaponCollection from "./pages/WeaponCollection";
const App = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/weaponcollection" element={<WeaponCollection />} />
          <Route
            path="/*"
            element={<ErrorPage errorMessage="Path not found" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
