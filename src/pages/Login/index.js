import './styles.css';
import React, { useState, useContext } from "react";
import { Context } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom"

function App() {
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

    const loginNavigate = () => {
        handleLogin(values.email, values.senha).then(() => {
            navigate("/home")
        })
    }

    return (
        <div className="body">
            <div className="app">
                <form className="app-form" >
                    <label>
                        Email:
                        <input type="text" name="email" onChange={handleAddValues} />
                    </label>
                    <label>
                        Senha:
                        <input type="text" name="senha" onChange={handleAddValues} />
                    </label>

        
                    <button type="button" className="button" onClick={() => loginNavigate()} >Logar</button>
                </form>
            </div>
        </div>
    );
}

export default App;