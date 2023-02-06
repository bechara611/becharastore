
import { useDispatch } from 'react-redux'
import { onLogin } from '../Auth/slice/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const onLoginUSE=async({email,password})=>{
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
