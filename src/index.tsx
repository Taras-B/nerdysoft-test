import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import { makeStore } from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename='/nerdysoft-test'>
    <Provider store={makeStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
