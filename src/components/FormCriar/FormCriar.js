import React, { useState } from 'react'
import './styles.css'
import { createPost } from '../../api/api'
import { useNavigate } from "react-router-dom"

const FormPost = () => {
    const [values, setValues] = useState();

    const navigate = useNavigate()

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
        }).then(() => {
            navigate("/home")
        })
    }

    return (
        <form className='body-formCriar'>
            <h3 className='body-formCriar-titulo'>Criar uma publicação</h3>
            <input className='body-formCriar-tituloTexto' maxLength={50} type="text" name="titulo" placeholder='Título' onChange={handleAddValues} />
            <textarea className='body-formCriar-texto' maxLength={400} type="text" name="texto" placeholder='Texto' onChange={handleAddValues} />
            <button className='body-formCriar-button' type="button" onClick={() => handleSubmit()}>Publicar</button>
        </form>
    );
}

export default FormPost