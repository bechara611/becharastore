import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productosAll:
        [
            {
                _id: 'abc123',
                idstore: 'store124',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 1',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc124',
                idstore: 'store125',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 2',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc125',
                idstore: 'store126',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 3',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc126',
                idstore: 'store127',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 4',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc127',
                idstore: 'store128',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 5',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc128',
                idstore: 'store129',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 6',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc129',
                idstore: 'store120',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 7',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc1299',
                idstore: 'store12011',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 711',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc12912',
                idstore: 'store12022',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 722',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc12944',
                idstore: 'store12033',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 733',
                description: 'Esto es una camisa linda',
            },
            {
                _id: 'abc12955',
                idstore: 'store12044',
                urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
                title: 'Camisa bechara 744',
                description: 'Esto es una camisa linda',
            },
        ],
    productosFiltrados: []
}
export const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        //Este metodo del slice al obtener los productos lo asignaras
        onAsignarProductosAll: (state, action) => {
            //TODO asignar 
        }
    }
})

export const { onAsignarProductosAll } = productSlice.actions;