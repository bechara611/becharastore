import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';
import 'sweetalert2/dist/sweetalert2.min.css'
import { Provider } from 'react-redux';
import { store } from './store/Store';
import InstanceBD from './Products/API/AxiosInstance';

const metodo = async()=>{
    try {
        const res = await InstanceBD.get('auth');
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  
}
metodo();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);

