import React, { useState } from 'react'

export const useFormularioDany = (initialForm={}) => {
    const [form, setform] = useState(initialForm)
  return {
    ...form
  }
}
