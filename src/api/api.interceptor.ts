// import { API_URL } from '@/config/api.config';
// import { removeTokenStorage } from '@/services/auth/auth.helper';
// import { AuthService } from '@/services/auth/auth.service';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { errorCatch, getContentType } from './api.helpers';
// export const axiosClassic = axios.create({
// 	baseURL: API_URL,
// 	headers: getContentType()
// })
// export const instance = axios.create({
// 	baseURL: API_URL,
// 	headers: getContentType()
// })
// instance.interceptors.request.use((config) => {
// 	const accessToken = Cookies.get('accessToken')
// 	if(config.headers && accessToken) {
// 		config.headers.authorization = `Bearer ${accessToken}`
// 	}
// 	return config;
// })
// instance.interceptors.response.use((config) => config, async error => {
// 	const originalRequest = error.config;
// 	if(error.response.status == 401 || errorCatch(error) == 'jwt expired' || errorCatch(error) == 'jwt must be provided' && error.config && !error.config._isRetry){
// 		originalRequest._isRetry = true
// 		try{
// 			await AuthService.getNewTokens()
// 			return instance.request(originalRequest)
// 		} catch(error){
// 			if(errorCatch(error) == 'jwt expired') removeTokenStorage()
// 		}
// 	}
// 	throw error;
// })
// export default instance;
import axios from 'axios'
import Cookies from 'js-cookie'

import { removeTokenStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { errorCatch } from './api.helper'

const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config // спецаильно написали чтобы занова прописать как параметр

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()

				return instance.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') removeTokenStorage()
			}
		}

		throw error
	}
)

export default instance

export const axiosClassic = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})