export type TypeProductData = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage: string | number
}

export enum EnumProductSort {
	HIGH_PRICE = 'HIGH_PRICE',
	LOW_PRICE = 'LOW_PRICE',
	NEWEST = 'NEWEST',
	OLDEST = 'OLDEST'
}
