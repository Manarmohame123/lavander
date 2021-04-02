import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div >
      <form className="form">
          <h1>sign in</h1>
          <input type ="text"  placeholder =" Type your Username"></input>
          <input type ="password"  placeholder =" Type your Password"></input>
          <Link to='/'>
            <button>sign in</button>
         </Link>
      </form>
    </div>
  );
}

export default Signin;