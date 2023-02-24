
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
      console.log(data)
      
    //?Esta funcion del slice hace login, antes de llamarla ya todo debe salir bien en el backend
    dispatch(onLogin({
      token: 'abc1234',
      _id: '2',
      name: 'Dany2',
      email: email,
      level: 'admin'
    }))
    Swal.fire('Success', 'Welcome to our store', 'success')
    //TODO hacer la parte del Login
    } catch (error) {
      return
    }

  }
  const onRegisterUSE = async ({ email, password1, password2, displayName }) => {
    //TODO backend del register y luego deberias llamar al metodo del slice onLogin para hacer login con la info que te de el register
    //  console.log({register:{email,password1,password2,displayName}})
  }

  return {
    //?metodos
    onLoginUSE,
    onRegisterUSE
  }
}
