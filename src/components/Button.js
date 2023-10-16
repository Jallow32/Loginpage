import React from 'react';
import ReactDOM from 'react-dom';
import './Button.css';

function Button() {

return (
<div className="container">
      <h4>Username</h4>       
      <input type="text" placeholder="Enter your username" />
      <br></br>
      <h4>Password</h4>
      <input type="text" placeholder="Enter your password" />
      <button> Log in </button>
    </div>
)

};

export default Button;