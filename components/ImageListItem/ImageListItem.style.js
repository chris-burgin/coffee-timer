import { StyleSheet } from "react-native"
import getWidthByPercentage from "../../helpers/getWidthByPercentage"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#BCBBC1",
  },
  image: {
    flex: 1,
    maxHeight: 180,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  description: {},
})

export default styles
