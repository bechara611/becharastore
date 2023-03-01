
import Swal from "sweetalert2"
import InstanceBD from "./AxiosInstance"
// eslint-disable-next-line
const ProductosAPI = {
    productosAll:
        [
            {
                _id: 'abc123',
                idstore: 'storebechara123',
                urlimg: 'https://res.cloudinary.com/dscpbsjbj/image/upload/v1677100691/pshopdk853cpwapn3kne.jpg',
                title: '1',
                description: 'descripcion super corta pero eficaz supongo',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc124',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '2',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc125',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '22',
                description: 'Esto es una camisa linda',
                categoria: 'WOMEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc126',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '4',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc127',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '5',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc128',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '6',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc129',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '7',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc1299',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '8',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc12912',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '9',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
            {
                _id: 'abc12944',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '10',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 0
            },
            {
                _id: 'abc12955',
                idstore: 'storebechara123',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '11',
                description: 'Esto es una camisa linda',
                categoria: 'CHILDREN',
                descriptionLong: 'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price: 15,
                cantidad: 1
            },
        ],
    productosFiltrados: [],
    productoscargando5: []
}

export const GetProductos = async () => {
    //TODO este como tal es el metodo del get obtener todos los productos de tu backend
   
    return new Promise(async(resolve, reject) => {
        try {
            const {data} = await InstanceBD.get('products')
          
           resolve(data.productos)
          /// resolve(ProductosAPI.productosAll)
      //    resolve({})
        } catch (error) {
            let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
            Swal.fire('Error', errorString, 'error')
            reject(false)
        }
    })
}
export const GetCategorias = async () => {
    //TODO este como tal es el metodo del get obtener todos las categorias

    return new Promise(async(resolve, reject) => {
        try {
            const {data} = await InstanceBD.get('categories')
            let categorias=[];
            data.categorias.forEach(element => {
                
                categorias.push(element.CategoryName)
            });
   
          //  resolve(['ALL', 'WOMEN', 'MEN', 'CHILDREN'])
          resolve(categorias)
        } catch (error) {
            let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
            Swal.fire('Error', errorString, 'error')
            reject(false)
        }
    })
}
export const PostsaveProductos = async ({producto}) => {
    //TODO este como tal es el metodo del post/save productos

    return new Promise(async(resolve, reject) => {
        try {
            //Primero se carga la imagen
            const {data:dataurl}= await InstanceBD.post('products/upload',producto.formData)
           
             await InstanceBD.post('products/insert',{
            title:producto.title,
            idstore:producto.idstore,
            urlimg:dataurl.urlimg,
            description:producto.description,
            categoria:producto.categoria,
            descriptionLong:producto.descriptionLong,
            price:producto.price,
            cantidad:100
           })
       // console.log({productoNew:producto})
       // console.log(data)
         await GetProductos();
       Swal.fire('SUCCESS', 'PROCESS COMPLETE', 'success')
          resolve(true)
        } catch (error) {
            let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
            Swal.fire('Error', errorString, 'error')
            reject(false)
        }
    })
}
export const PostsaveCategorias = async (CategoryName) => {
    //TODO este como tal es el metodo del post/save categorias

    return new Promise(async(resolve, reject) => {
        try {
            const {data} = await InstanceBD.post('categories/insert',{CategoryName:CategoryName})
         // console.log(data)
          resolve(data)
          Swal.fire('Success', 'CATEGORY CREATED', 'success')
        } catch (error) {
            let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
            Swal.fire('Error', errorString, 'error')
            reject(false)
        }
    })
}

export const DeleteCategorias = async (CategoryName) => {
    //TODO este como tal es el metodo borrar categoria, debes recibir el id o los datos completos de la categoria

    return new Promise(async(resolve, reject) => {
        try {
            console.log(CategoryName)
            const {data} = await InstanceBD.delete('categories/delete',{data:{CategoryName:CategoryName}})
      
          resolve(data)
          Swal.fire('Success', 'CATEGORY DELETED', 'success')
        } catch (error) {
            let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
            Swal.fire('Error', errorString, 'error')
            reject(false)
        }
    })
}
export const DeleteProductos = async () => {
    //TODO este como tal es el metodo borrar producto, debes recibir el id o los datos completos de la producto

    return new Promise((resolve, reject) => {
        try {
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}



export const PostUpdateProductos = async ({productoNuevo,productoBD}) => {
    //TODO este como tal es el metodo actualizar producto, debes recibir el id o los datos completos del producto

    return new Promise(async(resolve, reject) => {
        try {
            let objeto = {
                title:productoNuevo.productotitle,
                idstore:productoNuevo.productoidstore,
                urlimg:productoBD.urlimg,
                description:productoNuevo.productodescription,
                categoria:productoNuevo.categorySeleccionada,
                descriptionLong:productoNuevo.productodescriptionLong,
                price:productoNuevo.productoPrice,
                cantidad:100,
                destroyimg:false
            }
            //Primero se carga la imagen
           // const {data:dataurl}= await InstanceBD.post('products/upload',producto.formData)
           if(!productoNuevo.productoConformDataImg){
          
            
           }
           if(productoNuevo.productoConformDataImg){
           
            const {data:dataurl}= await InstanceBD.post('products/upload',productoNuevo.productoConformDataImg)
            objeto = {...objeto,urlimg:dataurl.urlimg,destroyimg:true}
           }
          
           await InstanceBD.post(`products/update/${productoBD._id}`,objeto)
          
         
         await GetProductos();
       Swal.fire('SUCCESS', 'UPDATE COMPLETE', 'success')
          resolve(true)
        } catch (error) {
            let errorString =  JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
            Swal.fire('Error', errorString, 'error')
            reject(false)
        }
    })
}

