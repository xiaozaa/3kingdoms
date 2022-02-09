import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/home";
import { GiftWrapSystem } from "./components/gift-wrap-system";
import { Roadmap } from "./components/roadmap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giftwrap" element={<GiftWrapSystem />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default App;
