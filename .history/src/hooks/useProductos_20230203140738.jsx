import { useDispatch } from "react-redux"
import { GetProductos } from "../Products/API/Productos"
import { onAsignar5productos, onAsignarProductosAll, onFiltrarProductos, onReset5Products } from "../Products/slice/productsSlice"


export const useProductos = () => {
    const dispatch = useDispatch()
    const handledAsignar5productosMasUSE = (inicio = 0, final = 5) => {
        //este dispatch llamada al metodo donde le damos el indice de inicio y el indice final, y va haciendo push al vector clon para mostrar mas y mas productos
        dispatch(onAsignar5productos({inicio, final}))
    }

    const handledGetProductosUSE =async()=>{
        //Aca obtiene los productos del backend con el metodo getProductos
        const resultado = await GetProductos();
        //se le pasa los productos y al mismo tiempo ese metodo slice, carga los primeros 5 productos al vector clon productos5.
        dispatch(onAsignarProductosAll({productos:resultado}))
    }

    const handledResetCargando5USE=()=>{
        //reseteo del vector clon, cada vez que se carga la pagina de productos, se resetea ya que este metodo es llamado en un useEffect[]
        dispatch(onReset5Products())
    }

    const handledFiltrarproductosUSE=({search,category})=>{
        //TODO metodo filtrar en el use
      console.log({search})
      console.log({category})
        if(search==="" && category=='ALL'){
            console.log('siiii')
            dispatch(onAsignar5productos({inicio:0, final:5}))
            return
        }
        console.log('no')
        dispatch(onFiltrarProductos({search,category}))
    }
    return {
        //metodos
        handledAsignar5productosMasUSE,
        handledGetProductosUSE,
        handledResetCargando5USE,
        handledFiltrarproductosUSE
    }
}
