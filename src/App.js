import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { TestEvent } from "./pages/TestEvent/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/test-event" element={<TestEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
