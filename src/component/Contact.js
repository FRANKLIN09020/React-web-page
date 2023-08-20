import React from 'react';
const Contact = () => {
  return (
    <div className='box' >
        <h2 className='head1'>Contact Us</h2>
        <form >
           Name
           <br></br> 
           <input type="text" placeholder='Enter Your Name' />
           <br></br>
           Email
           <br />
           <input type="email" placeholder='Enter Your Email'/>
           <br></br>
           <button  className='submit'>Submit</button>
        </form>
        
    </div>
  );
}

export default Contact;