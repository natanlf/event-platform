import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client' //react-dom pois é react para web
import App from './App'
import { client } from './lib/apollo'
import './styles/global.css'

//createRoot método inicial chamado uma única vez na aplicação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
