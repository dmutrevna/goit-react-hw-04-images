import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer autoClose={1000} />
  </>
);
