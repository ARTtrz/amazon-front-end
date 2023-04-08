export const API_URL = `${process.env.SERVER_URL}/api`

export const getAuthUrl = (string: string) => {
	return `/auth${string}`
}
export const getGenresUrl = (string: string) => {
	return `/genres${string}`
}
export const getMoviesUrl = (string: string) => {
	return `/movies${string}`
}
export const getActorsUrl = (string: string) => {
	return `/actors${string}`
}
export const getRatingsUrl = (string: string) => {
	return `/ratings${string}`
}
export const getUsersUrl = (string: string) => {
	return `/users${string}`
}
