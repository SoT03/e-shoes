import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

export default async function HomePage() {
	const billboard = await getBillboard('01428f22-d3da-4ede-8158-138861f88225');

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
			</div>
		</Container>
	);
}
