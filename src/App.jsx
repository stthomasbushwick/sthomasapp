import "./App.css";
import Home from "./pages/Home";
import NeedPrayer from "../components/NeedPrayer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prayer" element={<NeedPrayer />} />
      </Routes>
    </>
  );
}

export default App;
