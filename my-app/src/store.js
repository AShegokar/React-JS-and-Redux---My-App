import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import filterReducer from './filterComponent/filterReducer' // put in index.js reducer

const rootReducer = combineReducers({
  filterObject: filterReducer // this also
})
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store
