import React from 'react'
import ReactDOM from 'react-dom/client' //react-dom pois é react para web
import App from './App'
import './styles/global.css'

//createRoot método inicial chamado uma única vez na aplicação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
