
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { onLogin } from '../Auth/slice/authSlice';
import InstanceBD from '../Products/API/AxiosInstance';

export const useAuth = () => {
  const dispatch = useDispatch();
const navegar = useNavigate();
  const onLoginUSE = async ({ email = '', password = '' }) => {
  
    try {
      const {data} = await InstanceBD.post('auth/login',{email,password})
     //  console.log(data)
      localStorage.setItem('token',data.token)
      localStorage.setItem('email',data.user.email)
      localStorage.setItem('name',data.user.name)
      localStorage.setItem('level',data.user.level)
      localStorage.setItem('_id',data.user._id)
    //?Esta funcion del slice hace login, antes de llamarla ya todo debe salir bien en el backend
    dispatch(onLogin({
      token: data.token,
      _id:data.user._id,
      name: data.user.name,
      email: data.user.email,
      level: data.user.level
    }))
   
    Swal.fire('Success', 'Welcome to our store', 'success')

    } catch (error) {
      let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
      Swal.fire('Error', errorString, 'error')
      return
    }

  }
  const onRegisterUSE = async ({ email, password1, password2, displayName }) => {
    try {
      const {data} = await InstanceBD.post('auth/register',{email,password:password1,name:displayName,level:'USER'})
      console.log(data)
    } catch (error) {
      let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
      Swal.fire('Error', errorString, 'error')
      return
    }


    onLoginUSE({email:email,password:password1})
    navegar('/')
  }

  return {
    //?metodos
    onLoginUSE,
    onRegisterUSE
  }
}
