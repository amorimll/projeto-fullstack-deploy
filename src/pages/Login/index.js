import "./styles.css";
import React, { useEffect } from "react";
import FormLogin from "../../components/FormLogin/FormLogin"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    console.log(localStorage.getItem("loginStatus"))
    if (localStorage.getItem("loginStatus") == 23000) {
        return (
            <div className="body-login">
                <div className="body-login-content">
                    <div className="body-login-content-form">
                        <h1 className="body-login-content-form-titulo">Entrar</h1>
                        <FormLogin />
                        <h4>Credenciais inválidas</h4>
                        <div className="body-login-content-form-login">
                            <p className="body-login-content-form-login-text">Não tem uma conta?</p>
                            <button className="body-login-content-form-login-button" onClick={() => navigate("/register")}>
                                <p className="body-login-content-form-login-button-text"><strong>Cadastre aqui</strong></p>
                            </button>
                        </div>
                    </div>
                    <div className="body-login-content-image">
                        <img src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="body-login">
            <div className="body-login-content">
                <div className="body-login-content-form">
                    <h1 className="body-login-content-form-titulo">Entrar</h1>
                    <FormLogin />
                    <div className="body-login-content-form-login">
                        <p className="body-login-content-form-login-text">Não tem uma conta?</p>
                        <button className="body-login-content-form-login-button" onClick={() => navigate("/register")}>
                            <p className="body-login-content-form-login-button-text"><strong>Cadastre aqui</strong></p>
                        </button>
                    </div>
                </div>
                <div className="body-login-content-div">
                    <img className="body-login-content-div-image" alt="Imagem do céu do japão" src={"https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}></img>
                </div>
            </div>
        </div>
    );
}

export default Login;