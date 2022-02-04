import "./App.css";

import { Header } from "./components/header";
import { SmerktownSmiles } from "./components/smerktown-smiles";
import { GiftWrapSystem } from "./components/gift-wrap-system";
import { Roadmap } from "./components/roadmap";

function App() {
  return (
    <div className="App">
      <Header />
      <SmerktownSmiles />
      <GiftWrapSystem />
      <Roadmap />
    </div>
  );
}

export default App;
