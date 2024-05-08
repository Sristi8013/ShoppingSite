//import "./styles/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import CreateProduct from "./pages/CreateProduct";

function App() {

  return (
<div>
  <Navbar/>
  <main>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/CreateProduct" element={<CreateProduct />}/>
  <Route path="/Shop" element={<Shop />}/>
  <Route path="/Contact" element={<Contact />}/>
  <Route path="/About" element={<About />}/>
  <Route path="/Cart" element={<Cart />}/>
  <Route path="/Profile" element={<Profile />}/>
</Routes>
  </main>
<Footer/>
  </div>
  
  )
}

export default App
