import instance from '@/api/api.interceptor'
import { IPaymentResponse } from '@/shared/types/payment.interface'
import { IReview } from '@/shared/types/review.interface'

const PAYMENT = 'payment'

export const PaymentService = {
	async createPayment(amount: number) {
		const { data } = await instance.post<IPaymentResponse>(PAYMENT, {
			amount
		})

		return data
	}
}
