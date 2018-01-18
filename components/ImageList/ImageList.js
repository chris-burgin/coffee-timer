import React, { Component } from "react"
import { View, FlatList } from "react-native"

import styles from "./ImageList.style"

import ImageListItem from "../ImageListItem/ImageListItem"

class ImageList extends Component {
  _keyExtractor = (item, index) => item.id
  _renderItem = ({ item }) => <ImageListItem {...item} />

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

export default ImageList
