'use client';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Store } from '@prisma/client';
import { Trash } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface SettingsFormProps {
	initialData: Store;
}

const formSchema = z.object({
	name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export default function SettingsForm({ initialData }: SettingsFormProps) {
	const form = useForm<SettingsFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData,
	});

	return (
		<>
			<div className='flex items-center justify-between'>
				<Heading title='Settings' description='Manage store preferences' />
				<Button variant='destructive' size='icon' onClick={() => {}}>
					<Trash className='h-4 w-4' />
				</Button>
			</div>
			<Separator />
		</>
	);
}
