import React, {Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Challenges from "./challenges/challenges";

export default function RoutesApp() {
  return (
    <Router>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/desafios" element={<Challenges/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}