import React, { useState } from "react";
import { PAGE_NAME } from '../utils/conf';

const Login = ({setPage}) => {

  return (
    <>
      <h2>Username</h2>
      <input type="text" aria-label="Username"></input>
      <div>
        <button onClick={()=>setPage(PAGE_NAME.join)}>Join Game</button>
        <button>Create Game</button>
      </div>
    </>
  );
};

export default Login;
