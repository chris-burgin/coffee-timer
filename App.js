// react/react native
import React from "react"
import { View } from "react-native"

// redux
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

// redux persist
import { PersistGate } from "redux-persist/es/integration/react"

// navigator
import Navigator from "./navigator"

// configure store
const { persistor, store } = configureStore({
  timers: [
    {
      name: "Chemex",
      ratio: 16.67,
      defaultCoffeeWeight: 30,
      defaultTimer: true,
    },
  ],
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<View />}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
