import "./styles.css";
import { postUser } from "../../api/api";
import React, { useState } from "react";

const FormRegister = () => {

  const [values, setValues] = useState();

  const handleAddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleRegister = () => {
    postUser({
      nome: values.nome,
      senha: values.senha,
      email: values.email
    })
  }

  return (
    <div className="body-formRegister">
      <form className="body-formRegister-form">
        <label className="body-formRegister-form-label">
          Nome
        </label>
        <input className="body-formRegister-form-input" type="text" name="nome" onChange={handleAddValues} />
        <label className="body-formRegister-form-label">
          Email
        </label>
        <input className="body-formRegister-form-input" type="text" name="email" onChange={handleAddValues} />
        <label className="body-formRegister-form-label">
          Senha
        </label>
        <input className="body-formRegister-form-input" type="password" name="senha" onChange={handleAddValues} />
        <button type="button" className="body-formRegister-form-button" onClick={() => handleRegister()}>Cadastrar</button>
      </form>
    </div>
  );
}

export default FormRegister;