import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layout";
import Home from "./pages/home/Home";
import Tutorials from "./pages/tutorials/Tutorials";
import Contests from "./pages/contests/Contests";
import Community from "./pages/community/Community";
import Resources from "./pages/resources/Resources";
import "./index.css";
const Joi = require("joi");
const multer = require("multer");
const fs = require("fs");

app.use(express.json());


// found this that supposudly saves uploaded logos into the images folder with a unique name
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./images/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "-")),
});
const upload = multer({ storage });

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="community" element={<Community />} />
          <Route path="contests" element={<Contests />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);

