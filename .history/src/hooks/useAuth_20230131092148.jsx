
import { useDispatch } from 'react-redux'
import { onLogin } from '../Auth/slice/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const onLoginUSE=async({email='',password=''})=>{
    //TODO BACKEND PARA EL LOGIN Y OBTENER LOS DEMAS VALORES DEL PAYLOAD PARA HACER EL LOGIN EN EL SLICE
 console.log(email,password)

  }

    return {
        //metodos
        onLoginUSE
    }
}
