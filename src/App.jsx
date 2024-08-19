import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Home/Home.jsx"
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Feature from "./Components/Feature.jsx";
import Contact from "./Components/Contact.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Team from "./Components/Team.jsx";
 

function App() {
  return (

    <div>

      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}  />
        <Route path="/services" element={<Services/>} />
         <Route path="/feature" element={<Feature/>}   />
         <Route path="/contact" element={  <Contact/>   }  />
        <Route path="/testimonials"element={<Testimonial/>} />
       <Route path="/team" element={<Team/>} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
