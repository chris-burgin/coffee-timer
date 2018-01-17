const timer = (state = [], action) => {
  if (action.type === "ADDTIMER") {
    console.log("ADDTIMER: ", action)
    state.timers.push(action.timer)
  }

  return state
}

export default timer
