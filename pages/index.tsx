import { GetStaticProps, NextPage } from 'next'
import { FC } from 'react'

import Home from '@/components/screens/home/Home'

import { ProductService } from '@/services/product/product.service'

import { useAuth } from '@/hooks/useAuth'

import {
	IProduct,
	TypePaginationProducts,
	TypeProducts
} from '@/shared/types/product.interface'

const HomePage: NextPage<any> = ({ products, length }) => {
	return <Home products={products} length={length} />
}

export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	try {
		const data = await ProductService.getAll({
			page: 1,
			perPage: 4
		})
		console.log('Scc', data)

		return {
			props: data
		}
	} catch {
		return {
			props: {},
			notFound: true
		}
	}
}

export default HomePage
