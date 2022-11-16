import './styles.css'
import React, { useState } from 'react'
import { updatePost } from '../../api/api';

const EditarPost = () => {
    const [values, setValues] = useState();

    const titulo = JSON.parse(localStorage.getItem('titulo'))
    const texto = JSON.parse(localStorage.getItem('texto'))
    const id = JSON.parse(localStorage.getItem('id'))

    const handleAddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleSubmit = () => {
        updatePost({
            titulo: values?.titulo ? values.titulo : titulo,
            texto: values?.texto ? values.texto : texto,
            id: id
        })
    }

    return (
        <form>
            <label>
                Título:
                <input type="text" name="titulo" defaultValue={titulo} onChange={handleAddValues} />
            </label>
            <label>
                Texto:
                <input type="text" name="texto" defaultValue={texto} onChange={handleAddValues} />
            </label>
            <button type="button" onClick={() => handleSubmit()}>Publicar</button>
        </form>
    );
}

export default EditarPost