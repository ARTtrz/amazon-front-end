import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'

import { UseActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'
import Meta from '@/utils/meta/Meta'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register } = UseActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type == 'login') login(data)
		else if (type == 'register') register(data)

		reset()
	}
	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
				>
					<Heading className='capitalize text-clip mb-4'>
						Auth
					</Heading>

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={'block'}>
						<Button
							type='submit'
							onClick={() => setType('login')}
							disabled={isLoading}
							variant='orange'
						>
							Login
						</Button>
						<Button
							variant='white'
							type='submit'
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
