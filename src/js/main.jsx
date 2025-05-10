import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import {Home} from './components/Home';

// import fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
