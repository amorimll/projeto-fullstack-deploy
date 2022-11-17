import React from 'react'
import './styles.css'
import FormCriar from '../../components/FormCriar/FormCriar'
import Header from '../../components/Header/Header'

const CriarPost = () => {

    return (
        <>
            <Header />
            <div className='body-criarPost'>
                <FormCriar />
            </div>
        </>

    )
}

export default CriarPost