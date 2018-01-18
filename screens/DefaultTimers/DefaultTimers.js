import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

import styles from "./DefaultTimers.style"

import GridList from "../../components/GridList/GridList"

class DefaultTimers extends Component {
  _formatTimersForGrid(timers) {
    return timers.map(({ id, image, name, description }) => ({
      id: id,
      image: image,
      title: name,
      description: description,
    }))
  }

  render() {
    const { timers } = this.props
    console.log("TIMESR", this._formatTimersForGrid(timers))

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Default Timers </Text>
        <GridList items={this._formatTimersForGrid(timers)} />
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
