import { IOrder } from './order.interface'
import { IProduct } from './product.interface'

export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
	isAdmin: boolean
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
}
