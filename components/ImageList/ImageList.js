import React, { Component } from "react"
import { View, FlatList } from "react-native"

import styles from "./GridList.style"

import GridListItem from "../GridListItem/GridListItem"

class GridList extends Component {
  _keyExtractor = (item, index) => item.id
  _renderItem = ({ item }) => <GridListItem {...item} />

  render() {
    const { items } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

export default GridList
