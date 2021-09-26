import React from 'react';
import './login.css';
import { FaAtlassian, FaAngrycreative } from 'react-icons/fa';
import { AiOutlineGooglePlus, AiFillApple } from 'react-icons/ai';
import {DiGithubAlt } from 'react-icons/di';

const style = {fontSize: '4rem'}

const Login = () => {
  return (
    <div className="box">
      <div className="lside">
        <div className="left">
          <FaAtlassian
            style={{
              fontSize: '10rem',
            }}
          />
          <FaAngrycreative style={{ fontSize: '9.5rem' }} />
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
            <AiOutlineGooglePlus style={style }/>
          </li>
          <li>
            <AiFillApple style={style }/>
          </li>
          <li><DiGithubAlt style={style }/> </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Login;
