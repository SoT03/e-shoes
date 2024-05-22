'use client';
import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { Color, Size } from '@/types';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import React, { useState } from 'react';
import Filter from './filter';

interface MobileFiltersProps {
	colors: Color[];
	sizes: Size[];
}

export default function MobileFilters({ colors, sizes }: MobileFiltersProps) {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<>
			<Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
				Filters <Plus size={20} />
			</Button>

			<Dialog
				open={open}
				onClose={onClose}
				className='relative z-40 lg:hidden'
				as='div'>
				<div className='fixed inset-0 bg-black bg-opacity-25' />
				<div className='fixed inset-0 z-40 flex'>
					<DialogPanel className=' relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
						{' '}
						<div className='flex items-center justify-end px-4'>
							<IconButton icon={<X size={15} onClick={onClose} />}></IconButton>
						</div>
						<div className='p-4'>
							<Filter valueKey='sizeId' name='Sizes' data={sizes} />
							<Filter valueKey='colorId' name='Colors' data={colors} />
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
