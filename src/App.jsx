import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing"; 
import Loadpage from "./components/Loadpage"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/load" element={<Loadpage />} />
      </Routes>
    </Router>
  );
}

export default App;