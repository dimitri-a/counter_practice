const initialState = {

}

export default counter (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
