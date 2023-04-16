import axios from 'axios'

import { TypeProductData, TypeProductDataFilters } from './product.types'
import instance, { axiosClassic } from '@/api/api.interceptor'
import {
	IProduct,
	TypePaginationProducts
} from '@/shared/types/product.interface'

const PRODUCTS = 'product'

export const ProductService = {
	async getAll(
		queryData: TypeProductDataFilters = {} as TypeProductDataFilters
	) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: 'product',
			method: 'GET',
			params: queryData
		})

		return data
	},

	async getSimilar(productId: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/similar/${productId}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}}`,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return axiosClassic<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct[]>({
			url: `${PRODUCTS}`,
			method: 'POST'
		})
	},
	async update(id: string | number, name: TypeProductData) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
