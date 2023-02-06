//*?Recuerda que debes limitar el description a aproximadamente a 25 caracteres */}
const ProductosAPI = {
    productosAll:
        [
            {
                _id: 'abc123',
                idstore: 'store124',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '1',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok '
            },
          
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
            resolve(['ALL','WOMEN','MEN','CHILDREN'])
        } catch (error) {
            reject(false)
        }
    })
}

