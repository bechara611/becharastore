import React from 'react'
import { useDispatch } from 'react-redux'
import { onLogin } from '../Auth/slice/authSlice';

export const useAuth = ({email,password}) => {
  const dispatch = useDispatch();

  const onLoginUSE=()=>{
    //TODO BACKEND PARA EL LOGIN Y OBTENER LOS DEMAS VALORES DEL PAYLOAD PARA HACER EL LOGIN EN EL SLICE
    dispatch(onLogin({
        token: 'abc1234',
        _id: '2',
        name: 'Dany2',
        email: email,
        level: 'admin'
    }))
  }

    return {
        //metodos
        onLoginUSE
    }
}
