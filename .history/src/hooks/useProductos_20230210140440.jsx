/* eslint-disable eqeqeq */
import { useDispatch } from "react-redux"
import { DeleteCategorias, DeleteProductos, GetCategorias, GetProductos, PostsaveCategorias, PostsaveProductos, PostUpdateProductos } from "../Products/API/Productos"
import { onAsignar5productos, onAsignarCategoriasAll, onAsignarProductosAll, onFiltrarProductos, onReset5Products } from "../Products/slice/productsSlice"


export const useProductos = () => {
    const dispatch = useDispatch()

    const handledAsignar5productosMasUSE = (inicio = 0, final = 5) => {
        //este dispatch llamada al metodo donde le damos el indice de inicio y el indice final, y va haciendo push al vector clon para mostrar mas y mas productos
        dispatch(onAsignar5productos({ inicio, final }))
    }



    const handledResetCargando5USE = () => {
        //reseteo del vector clon, cada vez que se carga la pagina de productos, se resetea ya que este metodo es llamado en un useEffect[]
        dispatch(onReset5Products())
    }


    const handledFiltrarproductosUSE = ({ search, category }) => {
        //TODO metodo filtrar en el use
        //DEPENDIENDO SI EN LA BUSQUEDA NO HAY NADA Y LA CATEGORIA ES ALL, PUES SE REINICIA
        if (search === "" && category == 'ALL') {

            dispatch(onReset5Products())
            dispatch(onAsignar5productos({ inicio: 0, final: 5 }))
            return
        }

        dispatch(onFiltrarProductos({ search, category }))
    }


    //*?HENDLEDS DE USO DE LOS API
    const handledGetProductosUSE = async () => {
        //Aca obtiene los productos del backend con el metodo getProductos
        const resultado = await GetProductos();
        //se le pasa los productos y al mismo tiempo ese metodo slice, carga los primeros 5 productos al vector clon productos5.
        dispatch(onAsignarProductosAll({ productos: resultado }))
    }
    //metodo para guardar un producto
    const handledSaveProductosUSE = async (producto) => {
        //TODO conexion con el backend para guardar producto
        console.log('entraste al metodo en el useProductos para guardar producto')
        console.log(producto)
        //TODO ACA DEBES HACER EL POST DE LA IMAGEN, QUE TE DEVUELVA LA URL Y LUEGO PASARSELA A PRODUCTO PARA GUARDARLA EN EL AWAIT DE POSTSAVEPRODUCTOS
        await PostsaveProductos();
    }
    //metodo para ACTUALIZAR un producto
    const handledUpdateProductosUSE = async ({productoNuevo,productoBD}) => {
        //TODO conexion con el backend para actualizar producto
        console.log('entraste al metodo en el useProductos para actualizar producto')
        console.log(productoNuevo)
        console.log(productoBD)
        await PostUpdateProductos();
    }

    //metodo para delete un producto
    const handledDeleteProductosUSE = async (producto) => {
        //TODO conexion con el backend para delete producto
        console.log('entraste al metodo en el useProductos para borrar producto')
        console.log(producto)
        await DeleteProductos();
    }
    //*categorias
    const handledGetCategoriasUSE = async () => {
        const categorias = await GetCategorias();
        dispatch(onAsignarCategoriasAll(categorias))
    }

    const handledDeleteCategoriasUSE = async ({ categoria }) => {
        //TODO DELETE CATEGORIAS
        console.log('Realizar metodo del useProducto para borrar la categoria')
        console.log(categoria)
        await DeleteCategorias();
    }
    const handledSaveCategoriasUSE = async ({ categoria }) => {
        //TODO GUARDAR CATEGORIAS
        console.log('Realizar metodo del useProducto para GUARDAR la categoria')
        console.log(categoria)
        await PostsaveCategorias();
    }
   



    return {
        //metodos
        handledAsignar5productosMasUSE,
        handledGetProductosUSE,
        handledResetCargando5USE,
        handledFiltrarproductosUSE,
        handledGetCategoriasUSE,
        handledDeleteCategoriasUSE,
        handledSaveCategoriasUSE,
        handledSaveProductosUSE,
        handledDeleteProductosUSE,
        handledUpdateProductosUSE
    }
}
