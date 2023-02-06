import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: 'abc123',
        idstore: 'store123',
        urlimg: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png',
        title: '',
        description: '',
    },
]

export const productSlice = createSlice({
    name: 'Products',
    initialState
})