import React from 'react'
import { useDispatch } from 'react-redux'
import { onLogin } from '../Auth/slice/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const onLoginUSE=({payload})=>{
    dispatch(onLogin(payload))
  }

    return {
        //metodos
        onLoginUSE
    }
}
