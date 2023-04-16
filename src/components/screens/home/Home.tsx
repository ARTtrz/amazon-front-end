import { FC } from 'react'

import Heading from '@/components/ui/Heading'
import Catalog from '@/components/ui/catalog/Catalog'
import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Layout from '@/components/ui/layout/Layout'

import {
	TypePaginationProducts,
	TypeProducts
} from '@/shared/types/product.interface'
import Meta from '@/utils/meta/Meta'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Layout>
				<CatalogPagination
					title='Freshed products'
					data={{ products, length }}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
