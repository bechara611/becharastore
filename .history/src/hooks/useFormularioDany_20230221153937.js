import React, { useState } from 'react'

export const useFormularioDany = (initialForm = {}, validaciones = {}) => {
    const [form, setform] = useState(initialForm)
    const [cosasValidad, setCosasValidadas] = useState(validaciones)
    
    const crearValidaciones = () => {
        for (const propiedad in validaciones) {
            console.log(propiedad)
        }
    }
    useState(() => {
        setform(initialForm)
        crearValidaciones();
    }, [initialForm])

    const onChangeValor = ({ target }) => {
        setform({
            ...form,
            [target.name]: target.value
        })


    }


    return {
        ...form,
        onChangeValor
    }
}
