import React, { Component } from "react"
import { View, FlatList, ScrollView } from "react-native"

import styles from "./ImageList.style"

import ImageListItem from "../ImageListItem/ImageListItem"

class ImageList extends Component {
  _keyExtractor = (item, index) => item.id
  _renderItem = ({ item }) => <ImageListItem {...item} />

  render() {
    const { items } = this.props

    return (
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

export default ImageList
