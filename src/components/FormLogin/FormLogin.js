import './styles.css';
import React, { useState, useContext } from "react";
import { Context } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom"
import { loginUser } from '../../api/api';

const Form = () => {
    const { authenticated, handleLogin } = useContext(Context)
    const [values, setValues] = useState();

    const navigate = useNavigate()

    console.log(authenticated)

    localStorage.removeItem('loginStatus')

    const handleAddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleTeste = async () => {
        const data = await loginUser({
            email: values.email,
            senha: values.senha
        })

        localStorage.setItem('loginStatus', data.status)
        if (data.status == 23000) {
            navigate(0)
        } else if (data.status == 200) {
            handleLogin(values.email, values.senha).then(() => {
                navigate("/home")
            })
        }
    }

    const handleLoginAndNavigate = async () => {
        const data = await handleLogin(values.email, values.senha)
    }

    return (
        <div className="body-formLogin">
            <form className="body-formLogin-form">
                <div className="body-formLogin-form-fields">
                    <label className="body-formLogin-form-fields-label">
                        Email
                    </label>
                    <input className="body-formLogin-form-fields-input" type="text" name="email" onChange={handleAddValues} />
                </div>
                <div className="body-formLogin-form-fields">
                    <label className="body-formLogin-form-fields-label">
                        Senha
                    </label>
                    <input className="body-formLogin-form-fields-input" type="password" name="senha" onChange={handleAddValues} />
                </div>
                <button type="button" className="body-formLogin-form-button" onClick={() => handleTeste()}>Entrar</button>
            </form>
        </div>
    );
}

export default Form;