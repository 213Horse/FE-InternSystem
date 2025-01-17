import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.jsx'
import {  PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </PersistGate>
  </Provider>,
)
