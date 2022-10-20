import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
