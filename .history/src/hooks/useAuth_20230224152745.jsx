
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { onLogin } from '../Auth/slice/authSlice';
import InstanceBD from '../Products/API/AxiosInstance';

export const useAuth = () => {
  const dispatch = useDispatch();

  const onLoginUSE = async ({ email = '', password = '' }) => {
    //TODO BACKEND PARA EL LOGIN Y OBTENER LOS DEMAS VALORES DEL PAYLOAD PARA HACER EL LOGIN EN EL SLICE
    try {
      const {data} = await InstanceBD.post('auth/login',{email,password})
      // console.log(data)
      localStorage.setItem('token',data.token)
      localStorage.setItem('email',data.user.email)
    //?Esta funcion del slice hace login, antes de llamarla ya todo debe salir bien en el backend
    dispatch(onLogin({
      token: data.token,
      _id:data.user._id,
      name: data.user.name,
      email: data.user.email,
      level: data.user.level
    }))
   
    Swal.fire('Success', 'Welcome to our store', 'success')
    //TODO hacer la parte del Login
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
    //TODO backend del register y luego deberias llamar al metodo del slice onLogin para hacer login con la info que te de el register

    onLoginUSE({email:email,password:password1})
      Swal.fire('Success', 'Welcome to our store', 'success')
  }

  return {
    //?metodos
    onLoginUSE,
    onRegisterUSE
  }
}
