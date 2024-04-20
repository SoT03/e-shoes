'use client';

import { useState } from 'react';
import * as z from 'zod';
import axios from 'axios';

import { useStoreModal } from '@/hooks/use-store-modal';
import Modal from '@/components/ui/modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const formSchema = z.object({
	name: z.string().min(1),
});

export const StoreModal = () => {
	const storeModal = useStoreModal();
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setIsLoading(true);


			const response = await axios.post('/api/stores', values);

			toast.success("Store created.")
		} catch (error) {
			toast.error('Something went wrong.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal
			title='Create Store'
			description='Add a new store to manage products and categories'
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}>
			<div>
				<div className='space-y-4 py-2 pb-4'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												placeholder='E-commerce'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='pt-6 space-x-2 flex items-center justify-end w-full'>
								<Button
									variant='outline'
									disabled={isLoading}
									onClick={storeModal.onClose}>
									Cancel
								</Button>
								<Button type='submit' disabled={isLoading}>
									Continue
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</Modal>
	);
};
