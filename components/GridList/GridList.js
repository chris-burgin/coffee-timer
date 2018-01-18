import React, { Component } from "react"
import { Container, Text } from "native-base"

import styles from "./GridList.style"

import GridListItem from "../GridListItem/GridListItem"

class GridList extends Component {
  render() {
    const { items } = this.props
    console.log("ITEMS", items)

    return (
      <Container>
        {items.map((item, i) => <GridListItem key={i} {...item} />)}
      </Container>
    )
  }
}

export default GridList
