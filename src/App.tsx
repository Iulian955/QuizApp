/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path={`/`} element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
