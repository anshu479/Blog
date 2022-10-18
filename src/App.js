import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./home/Home";
import Authentication from "./authentication/Authentication";

import "./App.css";
import Navbar from "./navbar/Navbar";
import Article from "./UI/article/Article";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/auth" element={<Authentication></Authentication>} />
        <Route path="/creArt" element={<Article></Article>} />
      </Routes>
    </Router>
  );
}

export default App;
