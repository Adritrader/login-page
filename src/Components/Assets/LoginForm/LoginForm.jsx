import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



export const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action='' >
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Usuario' required />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        
        <div className='remember-forgot'>
          <label><input type="checkbox" />Recordarme</label>
          <a href='#'>¿Se ha olvidado de su contraseña?</a>
        </div>
        <button type='submit'>Conecta</button>
        <div className='register-link'>
          <p>¿No tienes una cuenta?<a href='#'>Regístrate</a></p>
        </div>
      </form>
    </div>
  )
}
