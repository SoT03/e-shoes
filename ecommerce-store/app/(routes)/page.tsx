import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

export default async function HomePage() {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard('8262ae8c-56b0-4ce9-842c-78b8692d6c82');

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />

				<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</Container>
	);
}
