import './styles.css'
import React from 'react'
import FormEditar from '../../components/FormEditar/FormEditar'
import Header from '../../components/Header/Header'

const EditarPost = () => {

    return (
        <>
            <Header />
            <div className='body-editarPost'>
                <FormEditar />
            </div>
        </>
    )
}

export default EditarPost