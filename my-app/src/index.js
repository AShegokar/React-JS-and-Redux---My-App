import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
// import * as fiterAction from './filterComponent/filterAction'
// const store = configureStore()
//store.dispactch(fiterAction.fetchFiterData())
// console.log(store, 'hh')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
