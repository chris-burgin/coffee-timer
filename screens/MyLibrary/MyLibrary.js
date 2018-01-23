import React, { Component } from "react"
import { ScrollView, Text } from "react-native"
import { connect } from "react-redux"

import styles from "./MyLibrary.style"

import StandardList from "../../components/StandardList/StandardList"

class MyLibrary extends Component {
  render() {
    const { timers } = this.props

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}> My Library </Text>
        <StandardList items={timers} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  // fetch all user created filters (aka, non-default)
  timers: state.timers.filter(t => t.defaultTimer === false),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary)
