import instance, { axiosClassic } from '@/api/api.interceptor'
import { IOrder } from '@/shared/types/order.interface'

const ORDERS = 'orders'

export const OrdersService = {
	async getAll() {
		return axiosClassic<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}
