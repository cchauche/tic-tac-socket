import React, { useState } from "react";
import { PAGE_NAME } from '../utils/conf';
import { Link } from 'react-router-dom'

const Login = ({setPage}) => {

  return (
    <>
      <h2>Username</h2>
      <input type="text" aria-label="Username"></input>
      <div>
        <Link to="/join">Join Game</Link>
        <button>Create Game</button>
      </div>
    </>
  );
};

export default Login;
