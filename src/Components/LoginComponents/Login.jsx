//react
import React from 'react'
import { Link } from 'react-router-dom'
//comp
import '../../styleCss/login.css'
import MenuBar from '../HomeComponents/MenuBar'
import history from '../../History';

const loginUser = event => {
  localStorage.setItem('userId', '205');
  history.push('/')
}

export default function Login() {
  return (
      <div className='loginContainer'>
        <MenuBar/>
        <div className='login'>
          <h2>Entrar no WorkApp</h2>
          <label htmlFor='login'>Login</label>
          <input className='loginInput'  type='text' name='login' id='login'></input>
          <label htmlFor='password'>Senha</label>
          <input className='loginInput'  type='password' name='password' id='password'></input>
          <button className='loginButton' onClick={ event => loginUser(event)}>Entrar</button>
          <div>Ainda não possui cadastro? <Link to='/signUp'>Crie uma conta</Link></div>
        </div>
        <div className='loginFooter'>
          <p className='footerInfo'>Termos de uso</p>
          <p className='footerInfo'>Política de Privacidade</p>
          <p className='footerInfo'>Ajuda</p>
        </div>
      </div>  
    )
}