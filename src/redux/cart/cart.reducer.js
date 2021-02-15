import CartActionTypes from './cart.types'
import { addItemToCart, decreaseItemsCount } from './cart.utils'
import { decreaseItems } from './cart.actions'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      }
    case CartActionTypes.DECREASE_ITEMS:
      return {
        ...state,
        cartItems: decreaseItemsCount(state.cartItems, action.payload),
        //cartItems: (action.payload.count -= 1),
      }

    default:
      return state
  }
}

export default cartReducer
