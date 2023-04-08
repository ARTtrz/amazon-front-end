import instance, { axiosClassic } from '@/api/api.interceptor'
import { IReview } from '@/shared/types/review.interface'

const REVIEW = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: REVIEW,
			method: 'GET'
		})
	},

	async leave(id: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEW}/leave/${id}`,
			method: 'POST',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IReview>({
			url: `${REVIEW}/${id}`,
			method: 'DELETE'
		})
	}
}
