
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Navbar/>
      
    <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact'element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
