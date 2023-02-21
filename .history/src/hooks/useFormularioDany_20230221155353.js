import { useState } from 'react'

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

    const estaFormularioValido = ()=>{
        for(const propiedad in cosasValidadas){
            if(cosasValidadas[propiedad]){
                setFormValid(false)
                return
            }else{
                setFormValid(true)
            }
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
        crearValidaciones();
        estaFormularioValido();
    }


    return {
        ...form,
        onChangeValor,
        ...cosasValidadas,
        formValid
    }
}

// const initialForm = {
//     Nombre:'',
//     Email:''
// }
// const validaciones = {
//     Nombre:[(value)=>value.length>5,'INSERT A VALID NOMBRE']
// }
