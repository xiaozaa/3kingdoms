import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Roadmap } from "./roadmap";
import { Team } from "./team";
import React from "react";
import "./i18n";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={this} />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
