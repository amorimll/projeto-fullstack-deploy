import React, { useState } from 'react'
import './styles.css'
import { createPost } from '../../api/api'

const FormPost = () => {

    const [values, setValues] = useState();

    const handleAddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleSubmit = () => {
        createPost({
            titulo: values.titulo,
            texto: values.texto,
        })
    }

    return (
        <form>
            <label>
                Título:
                <input type="text" name="titulo" placeholder='Título' onChange={handleAddValues} />
            </label>
            <label>
                Texto:
                <input type="text" name="texto" placeholder='Texto' onChange={handleAddValues} />
            </label>
            <button type="button" onClick={() => handleSubmit()}>Publicar</button>
        </form>
    );
}

export default FormPost