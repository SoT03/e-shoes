'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';

interface ImageUploadProps {
	disabled?: boolean;
	onChange: (value: string) => void;
	onRemove: (value: string) => void;
	value: string[];
}

export default function ImageUpload({
	disabled,
	onChange,
	onRemove,
	value,
}: ImageUploadProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	const onUpload = (result: any) => {
		onChange(result.info.secure_url);
	};

	return (
		<div>
			<div className='mb-4 flex items-center gap-4'>
				{value.map((url) => (
					<div
						key={url}
						className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
						<div className='z-10 absolute top-2 right-2'>
							<Button
								type='button'
								onClick={() => onRemove(url)}
								variant='destructive'
								size='icon'>
								<Trash className='w-4 h-4' />
							</Button>
						</div>
						<Image fill alt='' className='object-cover' src={url} />
					</div>
				))}
			</div>
			<CldUploadWidget onUploadAdded={onUpload} uploadPreset='hum7cf5l'>
				{({ open }) => {
					const onClick = () => {
						open();
					};

					return (
						<Button
							type='button'
							disabled={disabled}
							variant='secondary'
							onClick={onClick}>
							<ImagePlus className='w-4 h-4 mr-2' />
						</Button>
					);
				}}
			</CldUploadWidget>
		</div>
	);
}
