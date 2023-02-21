import React, { useState } from 'react'

export const useFormularioDany = (initialForm={}) => {
    const [form, setform] = useState(initialForm)

    const onChangeValor =({target})=>{
        setform({
            ...form,
            [target.name]:target.value
        })
    }
  return {
    ...form,
    onChangeValor
  }
}
