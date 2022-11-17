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
        <form className='body-formCriar'>
            <h3 className='body-formCriar-titulo'>Edite sua publicação</h3>
            <input className='body-formCriar-tituloTexto' maxLength={50} defaultValue={titulo} type="text" name="titulo" placeholder='Título' onChange={handleAddValues} />
            <textarea className='body-formCriar-texto' maxLength={400} defaultValue={texto} type="text" name="texto" placeholder='Texto' onChange={handleAddValues} />
            <button className='body-formCriar-button' type="button" onClick={() => handleSubmit()}>Editar</button>
        </form>
    );
}

export default EditarPost