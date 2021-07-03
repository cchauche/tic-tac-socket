import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import socket from '../utils/socket';

const Login = ({ setPage }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');

  return (
    <>
      <h2>Username</h2>
      <form>
        <input
          type="text"
          aria-label="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        >
        </input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            socket.emit("createUser", {username})
          }}
        >
          Create User
        </button>
      </form>
      <form>
        <div>
          {/* <Link to="/join">Join Game</Link> */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              history.push('/join');
            }}
          >
            Join Game
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              history.push('/game');
            }}
          >
            Create Game
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
