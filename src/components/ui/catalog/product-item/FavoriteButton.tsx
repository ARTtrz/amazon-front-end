import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { UserService } from '@/services/user.service'

import { UseActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'

import { IProduct } from '@/shared/types/product.interface'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const queryClient = useQueryClient()
	const { profile } = useProfile()
	if (!profile) return null
	const { mutate } = useMutation(
		['toggle'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)
	const isExists =
		profile.favorites &&
		profile.favorites.some((favorite) => favorite.id == productId)

	return (
		<div>
			<button onClick={() => mutate()} className='text-primary'>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
