import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'
import { IProduct } from '@/shared/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-3 z-10'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>

				<Link href={`/product/${product.slug}`}></Link>
				<Image
					width={250}
					src={product.images[0]}
					alt={product.name}
					height={250}
				/>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className=' font-semibold mt-2'>{product.name}</h3>
			</Link>
			<Link href={`/category`} className='text-aqua text-xs mb-2'>
				{product.category ? product.category.name : 'no '}
			</Link>
			<ProductRating product={product} />
			<div className='text-xl font-semibold'>
				{convertPrice(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
