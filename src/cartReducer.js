const initialState = {
  items:['boer','weer'] //array productids
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'ADDTOCART':
    return {...state,items:[...state.items,action.productId]}

  default:
    return state
  }
}
