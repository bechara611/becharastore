import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
            {
                _id: 'abc129',
                idstore: 'store120',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '7',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc1299',
                idstore: 'store12011',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '8',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc12912',
                idstore: 'store12022',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '9',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc12944',
                idstore: 'store12033',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '10',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc12955',
                idstore: 'store12044',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: '11',
                description: 'Esto es una camisa linda',
            },
        ],
    productosFiltrados: [],
    productoscargando5:[]
}
export const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        //Este metodo del slice al obtener los productos lo asignaras
        onAsignarProductosAll: (state, action) => {
            //TODO asignar todos a productos All

          //esta parte agrega los primeros 5 productos que ya se tienen
          if(!state.productosAll){return}
          if(state.productosAll.length<=0){return}
          for (let i= 1; i <=5; i++) {
            state.productoscargando5.push(state.productosAll[i])
         }
        },
        //TODO esto es un metodo que segun los parametros de inicio y final que le demos, ira agregando 5 productos mas al vector que se muestra en la lista
        onAsignar5productos:(state,payload)=>{
            console.log({payload})
            if(!state.productosAll){return}
            if(state.productosAll.length<=0){return}
          
            for (let i= payload.inicio; i <= payload.final; i++) {
               state.productoscargando5.push(state.productosAll[i])
            }
        }
    }
})

export const { onAsignarProductosAll,onAsignar5productos } = productSlice.actions;