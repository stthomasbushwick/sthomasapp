import './App.css'
import Home from './pages/Home'
import NeedPrayer from "./components/NeedPrayer"
import Footer from './components/Footer'
import Navbar from './components/ChurchNavbar'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/prayer" element={<NeedPrayer />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
