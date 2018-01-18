import React, { Component } from "react"
import { Container, Text } from "native-base"

class GridListItem extends Component {
  render() {
    const { image, title } = this.props
    return (
      <Container>
        <Text> {title} </Text>
      </Container>
    )
  }
}

export default GridListItem
