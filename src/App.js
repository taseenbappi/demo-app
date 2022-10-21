import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} >
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
