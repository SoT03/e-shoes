'use client';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Billboard } from '@prisma/client';
import { Trash } from 'lucide-react';
import React, { useState } from 'react';
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
import toast from 'react-hot-toast';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import AlertModal from '@/components/modals/alert-modal';
import ApiAlert from '@/components/ui/api-alert';
import useOrigin from '@/hooks/use-origin';
import ImageUpload from '@/components/ui/image-upload';

interface BillboardFormProps {
	initialData: Billboard | null;
}

const formSchema = z.object({
	label: z.string().min(1),
	imageUrl: z.string().min(1),
});

type BillboardFormValues = z.infer<typeof formSchema>;

export default function BillboardForm({ initialData }: BillboardFormProps) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const origin = useOrigin();
	const params = useParams();
	const router = useRouter();

	const title = initialData ? 'Edit billboard' : 'Create billboard';
	const description = initialData ? 'Edit a billboard' : 'Add a new billboard';
	const toastMessage = initialData ? 'Billboard updated' : 'Billboard created.';
	const action = initialData ? 'Save changes' : 'Create';

	const form = useForm<BillboardFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData || {
			label: '',
			imageUrl: '',
		},
	});

	const onSubmit = async (data: BillboardFormValues) => {
		try {
			setLoading(true);

			await axios.patch(`/api/stores/${params.storeId}`, data);
			router.refresh();
			toast.success('Store updated.');
		} catch (error) {
			toast.error('Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	const onDelete = async () => {
		try {
			setLoading(true);

			await axios.delete(`/api/stores/${params.storeId}`);
			router.refresh();
			router.push('/');
			toast.success('Store deleted.');
		} catch (error) {
			toast.error('Make sure you removed all products and categories first.');
		} finally {
			setLoading(false);
			setOpen(false);
		}
	};

	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={onDelete}
				loading={loading}
			/>
			<div className='flex items-center justify-between'>
				<Heading title={title} description={description} />
				{initialData && (
					<Button
						variant='destructive'
						size='icon'
						onClick={() => {
							setOpen(true);
						}}
						disabled={loading}>
						<Trash className='h-4 w-4' />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-8 w-full'>
					<FormField
						control={form.control}
						name='imageUrl'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Background image</FormLabel>
								<FormControl>
									<ImageUpload
										value={field.value ? [field.value] : []}
										disabled={loading}
										onChange={(url) => field.onChange(url)}
										onRemove={() => field.onChange('')}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='grid grid-cols-3 gap-8'>
						<FormField
							control={form.control}
							name='label'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Label</FormLabel>
									<FormControl>
										<Input
											disabled={loading}
											placeholder='Billboard label'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={loading} className='ml-auto' type='submit'>
						{action}
					</Button>
				</form>
			</Form>
			<Separator />
		</>
	);
}
