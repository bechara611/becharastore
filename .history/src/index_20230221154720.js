import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';
import 'sweetalert2/dist/sweetalert2.min.css'
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { useFormularioDany } from './hooks/useFormularioDany';

const App2=()=>{
    const initialForm = {
        Nombre:'',
        Email:''
    }
    const validaciones = {
        Nombre:[(value)=>value.length>5,'INSERT A VALID NOMBRE']
    }
    const {Nombre,Email,onChangeValor,NombreValid} = useFormularioDany(initialForm,validaciones)
    return(
        <>
        <h1>App2</h1>
        <form action="">
        <input type="text" name="Nombre" id="" placeholder='Nombre' value={Nombre} onChange={(e)=>onChangeValor(e)} />
        <input type="text" name="Email" id="" placeholder='Email' value={Email} onChange={onChangeValor} />
        </form>
        <button onClick={()=>{console.log({Nombre,Email,NombreValid})}}>dsfsdf</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <App2 />
    </BrowserRouter>
    </Provider>
);

