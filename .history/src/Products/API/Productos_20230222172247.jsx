//*?Recuerda que debes limitar el description a aproximadamente a 25 caracteres */}
const ProductosAPI = {
    productosAll:
        [
            
        ],
    productosFiltrados: [],
    productoscargando5: []
}
export const GetProductos = async () => {
    //TODO este como tal es el metodo del get obtener todos los productos de tu backend

    return new Promise((resolve, reject) => {
        try {
            resolve(ProductosAPI.productosAll)
        } catch (error) {
            reject(false)
        }
    })
}
export const GetCategorias = async () => {
    //TODO este como tal es el metodo del get obtener todos las categorias

    return new Promise((resolve, reject) => {
        try {
            resolve(['ALL', 'WOMEN', 'MEN', 'CHILDREN'])
        } catch (error) {
            reject(false)
        }
    })
}
export const PostsaveProductos = async () => {
    //TODO este como tal es el metodo del post/save productos

    return new Promise((resolve, reject) => {
        try {
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}
export const PostsaveCategorias = async () => {
    //TODO este como tal es el metodo del post/save categorias

    return new Promise((resolve, reject) => {
        try {
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}

export const DeleteCategorias = async () => {
    //TODO este como tal es el metodo borrar categoria, debes recibir el id o los datos completos de la categoria

    return new Promise((resolve, reject) => {
        try {
            resolve(true)
        } catch (error) {
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



export const PostUpdateProductos = async () => {
    //TODO este como tal es el metodo actualizar producto, debes recibir el id o los datos completos del producto

    return new Promise((resolve, reject) => {
        try {
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}

