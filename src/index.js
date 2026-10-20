import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layout";
import Home from "./pages/home/Home";
import Listings from "./tutorials/Tutorials"
import "./index.css";

const App = () => {
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path ="listings" element ={<Listings />}/>
      </Route>

    </Routes>
  </HashRouter>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);