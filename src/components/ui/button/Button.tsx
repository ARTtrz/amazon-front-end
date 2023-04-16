import cn from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
	size?: 'small' | 'medium' | 'large'
}

const Button: FC<IButton> = ({
	children,
	className,
	variant,
	size = 'medium',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-2xl font-medium shadow px-10 py-2 hover:shadow-lg transition duration-500 ease-in-out ',
				{
					'text-white bg-primary': variant == 'orange',
					'text-primary bg-white': variant == 'white',
					'px-5 py-2 text-sm': size == 'small'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
