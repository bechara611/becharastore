import { useMemo, useState } from 'react'

export const useFormularioDany = (initialForm = {}, validaciones = {}) => {
    const [form, setform] = useState(initialForm)
    const [cosasValidadas, setCosasValidadas] = useState(validaciones)


    const crearValidaciones = () => {
        const objetotemporal = {}
        for (const propiedad in validaciones) {
            const [funcion, mensaje] = validaciones[propiedad]
            objetotemporal[`${propiedad}Valid`] = funcion(form[propiedad]) ? null : mensaje
        }
        setCosasValidadas(objetotemporal)
    }
    useState(() => {
        crearValidaciones();
    }, [form])


    const onChangeValor = ({ target }) => {
        setform({
            ...form,
            [target.name]: target.value
        })
        crearValidaciones();
    }
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( cosasValidadas )) {
            if ( cosasValidadas[formValue] !== null ) return false;
        }

        return true;
    }, [ cosasValidadas ])

    return {
        ...form,
        form,
        onChangeValor,
        ...cosasValidadas,
        isFormValid
    }
}

// const initialForm = {
//     Nombre:'',
//     Email:''
// }
// const validaciones = {
//     Nombre:[(value)=>value.length>5,'INSERT A VALID NOMBRE']
// }
