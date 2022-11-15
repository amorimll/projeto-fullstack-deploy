import './styles.css';
import { postUser} from '../../api/api';
import React, { useState } from "react";

function App() {

  const [values, setValues] = useState();

  const handleAddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    postUser({
      nome: values.nome,
      senha: values.senha,
      email: values.email
    })
  }

  return (
    <div className="body">
      <div className="app">
        <form className="app-form" >
          <label>
            Nome:
            <input type="text" name="nome" onChange={handleAddValues} />
          </label>
          <label>
            Senha:
            <input type="text" name="senha" onChange={handleAddValues} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={handleAddValues} />
          </label>
          <button className="button" onClick={() => handleClickButton()} >Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;