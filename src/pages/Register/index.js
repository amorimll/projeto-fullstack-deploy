import './styles.css';
import React from "react";
import FormRegister from '../../components/FormRegistrar/FormRegistrar';
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

  // eslint-disable-next-line
  if (localStorage.getItem('registroStatus') == 23000) {
    return (
      <div className="body-register">
        <div className="body-register-content">
          <div className='body-register-content-form'>
            <h1 className='body-register-content-form-titulo'>Criar conta</h1>
            <FormRegister />
            <h4 className="body-register-content-erro">Email inválido ou já cadastrado.</h4>
            <div className='body-register-content-form-login'>
              <p className='body-register-content-form-login-text'>Já tem uma conta?</p>
              <button className='body-register-content-form-login-button' onClick={() => { navigate("/login"); localStorage.removeItem('registroStatus') }}>
                <p className='body-register-content-form-login-button-text'><strong>Entre aqui</strong></p>
              </button>
            </div>
          </div>
          <div className="body-login-content-div">
            <img className="body-login-content-div-image" alt="Imagem do céu do japão" src={"https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}></img>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="body-register">
      <div className="body-register-content">
        <div className='body-register-content-form'>
          <h1 className='body-register-content-form-titulo'>Criar conta</h1>
          <FormRegister />
          <div className='body-register-content-form-login'>
            <p className='body-register-content-form-login-text'>Já tem uma conta?</p>
            <button className='body-register-content-form-login-button' onClick={() => navigate("/login")}>
              <p className='body-register-content-form-login-button-text'><strong>Entre aqui</strong></p>
            </button>
          </div>
        </div>
        <div className="body-login-content-div">
          <img className="body-login-content-div-image" alt="Imagem do céu do japão" src={"https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}></img>
        </div>
      </div>
    </div>
  );
}

export default Register;