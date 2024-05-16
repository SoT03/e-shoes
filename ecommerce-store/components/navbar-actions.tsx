'use client';

import React, { useEffect, useState } from 'react';
import Button from './ui/button';
import { ShoppingBag } from 'lucide-react';

export default function NavbarActions() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button className='flex items-cetner rounded-full bg-black px-4 py-2'>
				<ShoppingBag size={20} color='white' />0
			</Button>
		</div>
	);
}
