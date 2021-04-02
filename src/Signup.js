import React from 'react';
import './App.css';


function Signup() {
  return (
    <div >
      <form className="form">
          <h1>sign up</h1>
          <input type ="text" placeholder =" Type your Username"></input>
          <input type ="email"  placeholder =" Type your E-mail"></input>
          <input type ="password"  placeholder =" Type your Password"></input>
         
            <button>sign up</button>
         
      </form>
    </div>
  );
}

export default Signup;
