import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { ProductService } from '@/services/product/product.service'
import {
	EnumProductSort,
	TypeProductData
} from '@/services/product/product.types'

import { UseActions } from '@/hooks/useActions'

import Heading from '../Heading'
import Button from '../button/Button'

import SortDropDown from './SortDropDown'
import ProductItem from './product-item/ProductItem'
import {
	IProduct,
	TypePaginationProducts
} from '@/shared/types/product.interface'

interface ICatalogPagination {
	data: TypePaginationProducts
	isLoading?: boolean
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({
	data,
	isLoading,
	title
}) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortTpe] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: res, isLoading: isResLoading } = useQuery(
		['products', sortType],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data
		}
	)
	const { logout } = UseActions()
	//Loader add
	return (
		<section>
			<button onClick={() => logout()}>Logout</button>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropDown sortType={sortType} setSortType={setSortTpe} />
			{res.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{res.products.map((product) => (
							<ProductItem
								key={product.id}
								product={product}
							/>
						))}
					</div>

					<div className='text-center mt-16'>
						{Array.from({ length: res.length / 4 }).map(
							(_, index) => {
								const pageNumber = index + 1
								return (
									<Button
										size='small'
										variant={
											page == pageNumber
												? 'orange'
												: 'white'
										}
										onClick={() =>
											setPage(pageNumber)
										}
										className='mx-3'
									>
										{pageNumber}
									</Button>
								)
							}
						)}
					</div>
				</>
			) : (
				<div>There are no carts</div>
			)}
		</section>
	)
}

export default CatalogPagination
