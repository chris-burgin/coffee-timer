import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

import styles from "./DefaultTimers.style"

import ImageList from "../../components/ImageList/ImageList"

class DefaultTimers extends Component {
  _formatTimers(timers) {
    return timers.map(({ id, image, name, description }) => ({
      id: id,
      image: image,
      title: name,
      description: description,
    }))
  }

  render() {
    const { timers } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Default Timers </Text>
        <ImageList items={this._formatTimers(timers)} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // fetch all default timers
  timers: state.timers.filter(t => t.defaultTimer === true),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTimers)
