import { cartSlice } from './cart/cart.slice'
import * as UserActions from './user/user.actions'

export const allActions = {
	...UserActions,
	...cartSlice.actions
}
