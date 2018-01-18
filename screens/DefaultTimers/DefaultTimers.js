import React, { Component } from "react"
import { Container, Text } from "native-base"
import { connect } from "react-redux"

import GridList from "../../components/GridList/GridList"

class DefaultTimers extends Component {
  _formatTimersForGrid(timers) {
    return timers.map(({ image, name }) => ({
      image: image,
      title: name,
    }))
  }

  render() {
    const { timers } = this.props
    console.log("TIMESR", this._formatTimersForGrid(timers))

    return (
      <Container>
        <Text> Default Timers </Text>
        <GridList items={this._formatTimersForGrid(timers)} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  // fetch all default timers
  timers: state.timers.filter(t => t.defaultTimer === true),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTimers)
