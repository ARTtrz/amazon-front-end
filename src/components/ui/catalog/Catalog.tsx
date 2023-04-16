import { FC } from 'react'

import { UseActions } from '@/hooks/useActions'

import Heading from '../Heading'
import Button from '../button/Button'

import SortDropDown from './SortDropDown'
import ProductItem from './product-item/ProductItem'
import { IProduct } from '@/shared/types/product.interface'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isPagination = false
}) => {
	const { logout } = UseActions()
	//Loader add
	return (
		<section>
			<button onClick={() => logout()}>Logout</button>
			{title && <Heading className='mb-5'>{title}</Heading>}

			{products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{products.map((product) => (
							<ProductItem
								key={product.id}
								product={product}
							/>
						))}
					</div>
					{isPagination && (
						<Button variant='orange'>Load more</Button>
					)}
				</>
			) : (
				<div>There are no carts</div>
			)}
		</section>
	)
}

export default Catalog
