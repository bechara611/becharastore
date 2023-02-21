import React, { useState } from 'react'

export const useFormularioDany = (initialForm={},validaciones={}) => {
    const [form, setform] = useState(initialForm)
    const [cosasValidad,setCosasValidadas]=useState(validaciones)

    useState(()=>{
        setform(initialForm)
    },[initialForm])

    const onChangeValor =({target})=>{
        setform({
            ...form,
            [target.name]:target.value
        })

    const creacionDeCamposValidados =()=>{
        console.log('Dany')
    }
    }
  return {
    ...form,
    onChangeValor
  }
}
