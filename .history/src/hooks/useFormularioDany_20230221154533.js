import React, { useState } from 'react'

export const useFormularioDany = (initialForm = {}, validaciones = {}) => {
    const [form, setform] = useState(initialForm)
    const [cosasValidad, setCosasValidadas] = useState(validaciones)

    const crearValidaciones = () => {
        const objetotemporal={}
        for (const propiedad in validaciones) {
          const [funcion,mensaje] = validaciones[propiedad]
         objetotemporal[`${propiedad}Valid`]=funcion(form[propiedad]) ? null : mensaje
        }
        setCosasValidadas(objetotemporal)
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
        onChangeValor,
        ...cosasValidad
    }
}
