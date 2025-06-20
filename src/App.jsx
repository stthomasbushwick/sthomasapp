import "./App.css";
import Home from "./pages/Home";
import NeedPrayer from "./components/NeedPrayer";
import Footer from "./components/Footer";
import Navbar from "./components/ChurchNavbar";
import Readings from "./pages/Readings";
import Members from "./pages/Members";
import  Events  from "./pages/Events";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prayer" element={<NeedPrayer />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
