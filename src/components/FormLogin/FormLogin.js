import './styles.css';
import React, { useState, useContext } from "react";
import { Context } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom"
import { loginUser } from '../../api/api';

const Form = () => {
    const { handleLogin } = useContext(Context)
    const [values, setValues] = useState();

    const navigate = useNavigate()

    localStorage.removeItem('loginStatus')

    const handleAddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleLoginENavigate = async () => {
        const data = await loginUser({
            email: values.email,
            senha: values.senha
        })

        localStorage.setItem('loginStatus', data.status)
        // eslint-disable-next-line
        if (data.status == 23000) {
            navigate(0)
            // eslint-disable-next-line
        } else if (data.status == 200) {
            handleLogin(values.email, values.senha).then(() => {
                navigate("/home")
            })
        }
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
                <button type="button" className="body-formLogin-form-button" onClick={() => handleLoginENavigate()}>Entrar</button>
            </form>
        </div>
    );
}

export default Form;