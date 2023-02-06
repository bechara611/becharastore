import { useDispatch } from "react-redux"
import { onAsignar5productos } from "../Products/slice/productsSlice"


export const useProductos = () => {
    const dispatch = useDispatch()
    const handledAsignar5productosMasUSE = (inicio = 0, final = 5) => {
        console.log({inicio,final})
        dispatch(onAsignar5productos({inicio, final}))
    }
    return {
        //metodos
        handledAsignar5productosMasUSE
    }
}
