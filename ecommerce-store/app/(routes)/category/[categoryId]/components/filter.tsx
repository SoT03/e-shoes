'use client';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Size, Color } from '@/types';
import { Divide } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import React from 'react';

interface FilterProps {
	data: (Size | Color)[];
	name: string;
	valueKey: string;
}

export default function Filter({ data, name, valueKey }: FilterProps) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedValue = searchParams.get(valueKey);

	const onClick = (id: string) => {
		const current = qs.parse(searchParams.toString());

		const query = {
			...current,
			[valueKey]: id,
		};

		if (current[valueKey] === id) {
			query[valueKey] = null;
		}

		const url = qs.stringifyUrl(
			{ url: window.location.href, query },
			{ skipNull: true }
		);

		router.push(url);
	};

	return (
		<div className='mb-8'>
			<h3 className='text-lg font-semibold'>{name}</h3>
			<hr className='my-4' />
			<div className='flex flex-warp gap-2'>
				{data.map((filter) => {
					return (
						<div key={filter.id} className='flex items-center'>
							<Button
								className={cn(
									'rounded-md text-sm p-2 bg-white text-gray-800 border border-gray-300',
									selectedValue === filter.id && 'bg-black text-white'
								)}
								onClick={() => onClick(filter.id)}>
								{filter.name}
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
