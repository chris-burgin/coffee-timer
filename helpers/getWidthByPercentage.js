import { Dimensions } from "react-native"

const getWidthByPercentage = percentage =>
  Dimensions.get("window").width * percentage

export default getWidthByPercentage
