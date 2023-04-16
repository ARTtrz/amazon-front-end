// export const convertPrice = (price: number) => {
// 	return price.toLocaleString('en-US', {
// 		style: 'currency',
// 		currency: 'USD'
// 	})
// }

export const convertPrice = (price: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(price)
}
