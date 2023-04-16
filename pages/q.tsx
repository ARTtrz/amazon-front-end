import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'

import { ProductService } from '@/services/product/product.service'

import Meta from '@/utils/meta/Meta'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	console.log(query.term)
	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({
			searchTerm: query.term as string
		})
	)
	console.log(data?.products)
	return (
		<Meta title='Поиск'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Поиск по запросу "${query.term || ''}"`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
