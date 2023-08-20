import React from 'react';
import Logo from '../image/image1.jpg';


const Home = () => {
  return (
    <div>
    <div class="tagline1">
Feels Like Home, 
<br />
Tastes Like a Paradise. 
    </div>
    <div class="tagline2">
Freshest Ingredients Guranteed.
    </div>
    
    <button className='btn'>Order Online</button>
    <img src={Logo} alt="main" className='img' />
</div>
  
  );
}

export default Home;