import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./StandardListItem.style"

class StandardListItem extends Component {
  render() {
    const { name } = this.props

    return (
      <View style={styles.container}>
        <Text> {name} </Text>
      </View>
    )
  }
}

export default StandardListItem
