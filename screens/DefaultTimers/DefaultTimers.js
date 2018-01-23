import React, { Component } from "react"
import { Text, ScrollView } from "react-native"
import { connect } from "react-redux"

import styles from "./DefaultTimers.style"

import ImageList from "../../components/ImageList/ImageList"

class DefaultTimers extends Component {
  render() {
    const { timers } = this.props

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}> Default Timers </Text>
        <ImageList items={timers} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  // fetch all default timers
  timers: state.timers.filter(t => t.defaultTimer === true),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTimers)
