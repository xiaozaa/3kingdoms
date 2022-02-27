import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
