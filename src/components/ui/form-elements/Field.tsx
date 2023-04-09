import cn from 'clsx'
import { FC, forwardRef } from 'react'

import { IField } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn('mb-4', styles.field)} style={style}>
				<label>
					<span className='mb-2 block'>{placeholder}</span>
					<input
						type={type}
						ref={ref}
						{...rest}
						className={cn(
							'px-4 py-2 w-full placeholder:text-gray rounded-lg outline-none transition-all focus:border-primary border border-gray border-solid',
							{
								'border-red': !!error
							}
						)}
						placeholder={placeholder}
					/>
				</label>
				{error && (
					<div className={styles.error}>{error.message}</div>
				)}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field

/**ref={ref}, потому что forwardRef нужно показать куда ему идти */
