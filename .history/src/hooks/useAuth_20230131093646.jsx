
import { useDispatch } from 'react-redux'
import { onLogin } from '../Auth/slice/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const onLoginUSE=async({email='',password=''})=>{
    //TODO BACKEND PARA EL LOGIN Y OBTENER LOS DEMAS VALORES DEL PAYLOAD PARA HACER EL LOGIN EN EL SLICE

 dispatch(onLogin({
    token: 'abc1234',
    _id: '2',
    name: 'Dany2',
    email: email,
    level: 'admin'
}))
  }
  const onRegisterUSE =({email,password1,password2,displayName})=>{
    //TODO backend del register y luego deberias llamar al metodo del slice onLogin para hacer login con la info que te de el register
    console.log({register:{email,password1,password2,displayName}})
  }

    return {
        //?metodos
        onLoginUSE,
        onRegisterUSE
    }
}
