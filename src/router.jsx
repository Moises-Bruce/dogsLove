import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PetsFallingInLove from "./pages/PetsFallingInLove";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets-falling-in-love" element={<PetsFallingInLove />} />
      </Routes>
    </BrowserRouter>
  )
}