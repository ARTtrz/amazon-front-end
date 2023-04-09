import { NextPage } from 'next'
import { FC } from 'react'

import Home from '@/components/screens/home/Home'

import { useAuth } from '@/hooks/useAuth'

const HomePage: NextPage = () => {
	return <Home />
}

export default HomePage
