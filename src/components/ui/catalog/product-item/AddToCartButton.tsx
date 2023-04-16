import { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { UseActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/shared/types/product.interface'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = UseActions()

	const { items } = useCart()

	const currenElement = items.find(
		(cartItem) => cartItem.product.id == product.id
	)

	return (
		<div>
			<button
				className='text-secondary '
				onClick={() =>
					currenElement
						? removeFromCart({ id: currenElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				{currenElement ? (
					<RiShoppingCartFill />
				) : (
					<RiShoppingCartLine />
				)}
			</button>
		</div>
	)
}

export default AddToCartButton
