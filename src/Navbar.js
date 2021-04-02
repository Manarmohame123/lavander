import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
 // const navstyle ={color :'white', margin :'10px' ,textdecoration : 'none',}
  return (
    
    <div >
     <nav className="nav">
          <Link className="a"  to="/"><h1>LAVANDER</h1></Link>
         <ul> 
           <Link className="a"  to="/"><li> Home</li></Link>
         <Link className="a" to="/signin"><li> Sign in</li></Link>
          <Link className="a" to="/signup"><li> Sign up</li></Link>
        
         </ul>
     </nav>
    </div>
  );
}

export default Nav;