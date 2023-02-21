import { useMemo, useState } from 'react'

export const useFormularioDany = (initialForm = {}, validaciones = {}) => {
    const [form, setform] = useState(initialForm)
    const [cosasValidadas, setCosasValidadas] = useState(validaciones)
    const [formValid,setFormValid]= useState(true)

    const crearValidaciones = () => {
        const objetotemporal = {}
        for (const propiedad in validaciones) {
            const [funcion, mensaje] = validaciones[propiedad]
            objetotemporal[`${propiedad}Valid`] = funcion(form[propiedad]) ? null : mensaje
        }
        setCosasValidadas(objetotemporal)
    }

    const isValid = useMemo(() =>{
        for(const propiedad in cosasValidadas){
            if(cosasValidadas[propiedad]!==null){
                return false
            }
            return true;
        }
    } , [cosasValidadas])
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


    return {
        ...form,
        form,
        onChangeValor,
        ...cosasValidadas,
        isValid
    }
}

// const initialForm = {
//     Nombre:'',
//     Email:''
// }
// const validaciones = {
//     Nombre:[(value)=>value.length>5,'INSERT A VALID NOMBRE']
// }
