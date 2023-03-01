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
    
        await PostsaveProductos({producto});
        await handledGetProductosUSE();
    }
    //metodo para ACTUALIZAR un producto
    const handledUpdateProductosUSE = async ({productoNuevo,productoBD}) => {
        //TODO conexion con el backend para actualizar producto
        console.log('entraste al metodo en el useProductos para actualizar producto')
        console.log({productoNuevo})//este tiene la data escrita en el formulario update
        console.log({productoBD})//esta es la informacion del producto proveniente en la BD
        //TODO recuerda si no tiene imagen usa la de la BD.
        //TODO recuerda que debes subir la imagen al back en caso de que haya una nueva
        //TODO debes mandarle el mongoID del producto
        //TODO ACA RECUERDA QUE DEBES MANDARLE LA PROPIEDAD DESTROYIMG en true o false para que el backend elimine la foto en cloudinary
        await PostUpdateProductos({productoNuevo,productoBD});
    }

    //metodo para delete un producto
    const handledDeleteProductosUSE = async ({productoBD}) => {
        //TODO conexion con el backend para delete producto
        console.log('entraste al metodo en el useProductos para borrar producto')
        console.log(productoBD)
        await DeleteProductos({productoBD});
        await  handledGetCategoriasUSE();
        await handledGetProductosUSE();
    }
    //*categorias
    const handledGetCategoriasUSE = async () => {
        const categorias = await GetCategorias();
        dispatch(onAsignarCategoriasAll(['']))
        dispatch(onAsignarCategoriasAll(categorias))
    }

    const handledDeleteCategoriasUSE = async ({ category }) => {
        //TODO DELETE CATEGORIAS
        console.log('Realizar metodo del useProducto para borrar la categoria')
        console.log(category)
        await DeleteCategorias(category);
    }
    const handledSaveCategoriasUSE = async ({ categoria='ALL' }) => {
      
     
        await PostsaveCategorias(categoria.toUpperCase());
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
