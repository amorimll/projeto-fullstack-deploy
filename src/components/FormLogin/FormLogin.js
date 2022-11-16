import './styles.css';
import React, { useState, useContext } from "react";
import { Context } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom"

const Form = () => {
    const { authenticated, handleLogin } = useContext(Context)
    const [values, setValues] = useState();

    const navigate = useNavigate()

    console.log(authenticated)

    const handleAddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleLoginAndNavigate = () => {
        handleLogin(values.email, values.senha)
            .then(() => {
                navigate("/home")
            })
    }

    return (
        <div className="body-formLogin">
            <form className="body-formLogin-form">
                <label className="body-formLogin-form-label">
                    Email
                </label>
                <input className="body-formLogin-form-input" type="text" name="email" onChange={handleAddValues} />
                <label className="body-formLogin-form-label">
                    Senha
                </label>
                <input className="body-formLogin-form-input" type="password" name="senha" onChange={handleAddValues} />

                <button type="button" className="body-formLogin-form-button" onClick={() => handleLoginAndNavigate()}>Entrar</button>
            </form>
        </div>
    );
}

export default Form;