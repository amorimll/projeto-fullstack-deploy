import "./styles.css";
import { postUser } from "../../api/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const FormRegister = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState();

  localStorage.removeItem('registroStatus')

  const handleAddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleRegister = async () => {
    const data = await postUser({
      nome: values.nome,
      senha: values.senha,
      email: values.email
    })

    localStorage.setItem('registroStatus', data.status)
    // eslint-disable-next-line
    if (data.status == 23000) {
      navigate(0)
      // eslint-disable-next-line
    } else if (data.status == 200) {
      navigate("/login")
    }
  }

  return (
    <div className="body-formRegister">
      <form className="body-formRegister-form">
        <div className="body-formRegister-form-fields">
          <label className="body-formRegister-form-fields-label">
            Nome
          </label>
          <input className="body-formRegister-form-fields-input" type="text" name="nome" onChange={handleAddValues} />
          <label className="body-formRegister-form-fields-label">
            Email
          </label>
          <input className="body-formRegister-form-fields-input" type="text" name="email" onChange={handleAddValues} />
        </div>
        <div className="body-formRegister-form-fields">
          <label className="body-formRegister-form-fields-label">
            Senha
          </label>
          <input className="body-formRegister-form-fields-input" type="password" name="senha" onChange={handleAddValues} />
        </div>
        <button type="button" className="body-formRegister-form-button" onClick={() => handleRegister()}>Cadastrar</button>
      </form>
    </div>
  );
}

export default FormRegister;