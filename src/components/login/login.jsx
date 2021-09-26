import React from 'react';
import './login.css';
import { FaAtlassian, FaAngrycreative } from 'react-icons/fa';
import { AiOutlineGooglePlus, AiFillApple } from 'react-icons/ai';
import {DiGithubAlt } from 'react-icons/di';

const Login = () => {
  return (
    <div className="box">
      <div className="lside">
        <div className="left">
          <FaAtlassian className="icon"/>
          <FaAngrycreative className="icon" />
        </div>
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Username" autoComplete="off" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Sign in" />
        </form>
      
      <div className="bottom">
        <ul>
          <li>
            <AiOutlineGooglePlus className="style"/>
          </li>
          <li>
            <AiFillApple className="style"/>
          </li>
          <li><DiGithubAlt className="style"/> </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Login;
