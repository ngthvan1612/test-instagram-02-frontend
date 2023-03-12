import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './types'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <App/>
  </React.StrictMode>
);
