import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { TestEvent } from "./pages/TestEvent/index";
import { CreateEvent } from './pages/CreateEvent';
import { Home } from "./pages/Home/index";
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test-event" element={<TestEvent />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
