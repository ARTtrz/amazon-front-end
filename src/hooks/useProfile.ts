import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user.service'

import { IFullUser, IUser } from '@/shared/types/user.types'

export const useProfile = () => {
	const { data } = useQuery(
		['get profile'],
		() => UserService.getProfile(),
		{
			select: ({ data }) => data
		}
	)

	return { profile: data || ({} as IFullUser) }
}
