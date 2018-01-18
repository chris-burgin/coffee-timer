import React, { Component } from "react"
import { Image, View, Text } from "react-native"

import styles from "./GridListItem.style"

class GridListItem extends Component {
  render() {
    const { image, title, description } = this.props
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/chemex.png")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.description}> {description}</Text>
        </View>
      </View>
    )
  }
}

export default GridListItem
