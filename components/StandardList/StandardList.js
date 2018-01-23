import React, { Component } from "react"
import { FlatList } from "react-native"

import styles from "./StandardList.style"

import StandardListItem from "../StandardListItem/StandardListItem"

class StandardList extends Component {
  _keyExtractor = (item, index) => item.id
  _renderItem = ({ item }) => <StandardListItem {...item} />

  render() {
    const { items } = this.props

    return (
      <FlatList
        style={styles.container}
        data={items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

export default StandardList
