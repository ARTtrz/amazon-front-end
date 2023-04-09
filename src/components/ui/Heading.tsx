import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}
const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return (
		//   {cn(styles.heading, className)}
		<h1 className={cn('font-semibold text-black text-2xl', className)}>
			{children}
		</h1>
	)
}
export default Heading
