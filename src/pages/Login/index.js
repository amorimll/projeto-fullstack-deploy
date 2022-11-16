import './styles.css';
import React from "react";
import FormLogin from '../../components/FormLogin/FormLogin'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="body-login">
            <div className="body-login-content">
                <div className='body-login-content-form'>
                    <h1 className='body-login-content-form-titulo'>Entrar</h1>
                    <FormLogin/>
                    <div className='body-login-content-form-login'>
                        <p className='body-login-content-form-login-text'>Não tem uma conta?</p>
                        <button className='body-login-content-form-login-button' onClick={() => navigate("/register")}>
                            <p className='body-login-content-form-login-button-text'><strong>Cadastre aqui</strong></p>
                        </button>
                    </div>
                </div>
                <div className='body-login-content-image'>
                    <h1>Segunda div</h1>
                </div>
            </div>
        </div>
        // <div className="body">
        //     <div className="app">
        //         <FormLogin />
        //     </div>
        // </div>
    );
}

export default Login;