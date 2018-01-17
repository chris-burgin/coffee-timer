// redux
import { createStore } from "redux"

// redux persist
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/es/storage"

// reducers
import rootReducer from "../reducers"

const configureStore = initalState => {
  const config = { key: "root", storage } // key is required // storage is now required
  // create reducer
  const reducer = persistReducer(
    config,
    rootReducer,
    initalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  const store = createStore(reducer)
  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
