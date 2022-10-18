import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./home/Home";

import "./App.css";
import Navbar from "./navbar/Navbar";
import Article from "./UI/article/Article";
import Profile from "./UI/Profile/Profile";
import Blog from "./Blog/Blog";
import Login from "./UI/Login/Login";

import { AuthContext } from "./context/AuthContext";
import Signup from "./Signup/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (!isLoggedIn) {
    routes = (
      <>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/auth" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/:pid/blog" element={<Blog></Blog>}></Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/creArt" element={<Article></Article>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/:pid/blog" element={<Blog></Blog>}></Route>
        <Route path="/auth" element={<Login></Login>} />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Navbar></Navbar>
        <Routes>{routes}</Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
