import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import firebase from './config/Firebase'

const store = createStore(reducer, applyMiddleware(logger))

store.subscribe(() => {
  firebase.database().ref('store/').set(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
