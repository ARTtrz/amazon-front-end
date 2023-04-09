import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helper'
import { toastr } from 'react-redux-toastr'

import { removeTokenStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { toastError } from '@/utils/toast-error'

//register
// IAuthResponse - что будет возвращать функция
//IEmailPassword - входные данные
//toastr - уведомления все прошло хорошо или нет
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			console.log('Success')
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

//login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

//logout
export const logout = createAsyncThunk('auth/logout', async () => {
	removeTokenStorage()
})

/* checkAuth */

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) == 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, pls sign in again'
				)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
