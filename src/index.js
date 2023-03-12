import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import TechStack from './Components/TechStack';
import Contact from './Components/Contact';
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
    <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/TechStack" component={TechStack} />
        <Route path="./Project" component={Project} />
        <Route path="/Contact" component={Contact} />
    </Routes>
    
    <App />
  </React.StrictMode>
);

