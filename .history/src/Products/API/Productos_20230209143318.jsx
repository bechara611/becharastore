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
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc124',
                idstore: 'store125',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '2',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc125',
                idstore: 'store126',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '2',
                description: 'Esto es una camisa linda',
                categoria: 'WOMEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc126',
                idstore: 'store127',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '4',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc127',
                idstore: 'store128',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '5',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc128',
                idstore: 'store129',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '6',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc129',
                idstore: 'store120',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '7',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc1299',
                idstore: 'store12011',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '8',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc12912',
                idstore: 'store12022',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '9',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc12944',
                idstore: 'store12033',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '10',
                description: 'Esto es una camisa linda',
                categoria: 'MEN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
            },
            {
                _id: 'abc12955',
                idstore: 'store12044',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '11',
                description: 'Esto es una camisa linda',
                categoria: 'CHILDREN',
                descriptionLong:'Loremfa-rotate-180 esto es una descripcion muchisimo mas larga que la anterior para demostrar que simplemente si se puede ok ok ',
                price:15
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



export const UpdateProducto = async () => {
    //TODO este como tal es el metodo actualizar producto, debes recibir el id o los datos completos del producto

    return new Promise((resolve, reject) => {
        try {
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}

