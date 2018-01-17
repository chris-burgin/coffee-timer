import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

class DefaultTimers extends Component {
  render() {
    console.log(this.props.timers)
    return (
      <View>
        <Text> Default Timers </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  timers: state.timers,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTimers)
