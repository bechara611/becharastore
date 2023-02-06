
const ProductosAPI = {
    productosAll:
        [
            {
                _id: 'abc123',
                idstore: 'store124',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '1',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc124',
                idstore: 'store125',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '2',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc125',
                idstore: 'store126',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '3',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc126',
                idstore: 'store127',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '4',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc127',
                idstore: 'store128',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '5',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc128',
                idstore: 'store129',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '6',
                description: 'Esto es una camisa linda',
            },
          
        ],
    productosFiltrados: [],
    productoscargando5:[]
}
export const GetProductos =async () => {
  //TODO este como tal es el metodo del get obtener todos los productos de tu backend

  return new Promise((resolve,reject)=>{
    try {
        resolve(ProductosAPI.productosAll)
    } catch (error) {
        reject(false)
    }
  })
}
