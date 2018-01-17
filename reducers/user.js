const user = (state = {}, action) => {
  if (action.type === "SETUSER") {
    return action.user
  } else {
    return state
  }
}

export default user
