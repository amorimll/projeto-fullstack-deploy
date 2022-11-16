import './styles.css';
import React from "react";
import FormRegister from '../../components/FormRegistrar/FormRegistrar';
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

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
        <div className='body-register-content-image'>
          <h1>Segunda div</h1>
        </div>
      </div>
    </div>
  );
}

export default Register;