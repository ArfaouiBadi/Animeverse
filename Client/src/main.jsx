import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './components/Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<CssBaseline/>*/}
    
    
    <Provider store={store}>
      <App />
    </Provider>
    
    
  </React.StrictMode>,
)
