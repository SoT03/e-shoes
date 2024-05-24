'use client';

import React, { useEffect, useState } from 'react';
import Button from './ui/button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

export default function NavbarActions() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();
	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button
				onClick={() => router.push('/cart')}
				className='flex items-cetner rounded-full bg-black px-4 py-2 gap-2'>
				<ShoppingBag size={20} color='white' /> {cart.items.length}
			</Button>
		</div>
	);
}
