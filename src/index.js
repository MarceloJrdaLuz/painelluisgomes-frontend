import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './AppRoutes';

ReactDOM.render(
    <BrowserRouter>
        <ToastContainer />
        <AppRoutes />
    </BrowserRouter>

    , document.getElementById('root'));
