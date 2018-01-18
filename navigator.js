// imports
import { StackNavigator, TabNavigator } from "react-navigation"

// screens
import DefaultTimers from "./screens/DefaultTimers/DefaultTimers"
import Account from "./screens/Account/Account"
import MyLibrary from "./screens/MyLibrary/MyLibrary"

const Navigator = StackNavigator({
  App: {
    screen: TabNavigator(
      {
        DefaultTimers: { screen: DefaultTimers },
        MyLibrary: { screen: MyLibrary },
        Account: { screen: Account },
      },
      {
        tabBarOptions: {
          style: {},
          activeTintColor: "#007AFF",
        },
      }
    ),
    navigationOptions: { header: null },
  },
})

export default Navigator
