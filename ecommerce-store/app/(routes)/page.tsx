import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

export default async function HomePage() {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard('01428f22-d3da-4ede-8158-138861f88225');

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
			</div>
			<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
				<ProductList title='Featured Products' items={products} />
			</div>
		</Container>
	);
}
