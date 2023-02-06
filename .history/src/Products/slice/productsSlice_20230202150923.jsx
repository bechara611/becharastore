import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    _id:'abc123',
    idstore:'store123',
    urlimg:'',
    title:'',
    description:'',
}]

export const productSlice= createSlice({
    name:'Products',
    initialState
})