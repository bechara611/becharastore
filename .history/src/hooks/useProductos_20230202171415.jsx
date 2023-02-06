import { useDispatch } from "react-redux"
import { GetProductos } from "../Products/API/Productos"
import { onAsignar5productos, onAsignarProductosAll } from "../Products/slice/productsSlice"


export const useProductos = () => {
    const dispatch = useDispatch()
    const handledAsignar5productosMasUSE = (inicio = 0, final = 5) => {
        console.log({inicio,final})
        dispatch(onAsignar5productos({inicio, final}))
    }

    const handledGetProductosUSE =async()=>{
        const resultado = await GetProductos();

        dispatch(onAsignarProductosAll({productos:resultado}))
    }
    return {
        //metodos
        handledAsignar5productosMasUSE,
        handledGetProductosUSE
    }
}
