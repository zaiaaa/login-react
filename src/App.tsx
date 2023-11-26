import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed"
import { Cadastro } from "./pages/signIn";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signin" element={<Cadastro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
