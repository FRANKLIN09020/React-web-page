
import { Link } from 'react-router-dom';

const Navbar = () => { 

  return (

    <header>
      <div className="toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
       
        <h2 className="logo">Spicy Restaurant</h2>
        <nav>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/About">AboutUs</Link></li>
           <li><Link to="/Contact"> ContactUs</Link></li>
        </nav>
    </header>
         
  );
}




export default Navbar;