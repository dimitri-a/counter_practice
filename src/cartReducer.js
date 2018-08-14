const initialState = {
  items:[1] //array productids
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'ADDTOCART':
    return {...state,items:[...state.items,action.productId]}

  default:
    return state
  }
}
