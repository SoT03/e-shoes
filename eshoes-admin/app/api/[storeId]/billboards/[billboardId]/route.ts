import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import React from 'react';

export async function PATCH(
	req: Request,
	{ params }: { params: { billboardId: string; storeId: string } }
) {
	try {
		const { userId } = auth();
		const body = await req.json();

		const { label, imageUrl } = body;

		if (!userId) {
			return new NextResponse('Unauthenticated', { status: 401 });
		}

		const { name } = body;

		if (!label) {
			return new NextResponse('Label is required', { status: 400 });
		}
		if (!imageUrl) {
			return new NextResponse('Image URL is required', { status: 400 });
		}

		if (!params.billboardId) {
			return new NextResponse('Billboard id is required', { status: 400 });
		}

		const storeByUserId = await prismadb.store.findFirst({
			where: {
				id: params.storeId,
				userId,
			},
		});

		if (!storeByUserId) {
			return new NextResponse('Unauthorized', { status: 403 });
		}

		const billboard = await prismadb.billboard.updateMany({
			where: { id: params.billboardId },
			data: { label, imageUrl },
		});

		return NextResponse.json(billboard);
	} catch (error) {
		console.log('[BILLBOARD_PATCH]', error);
		return new NextResponse('Iternal error', { status: 500 });
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { storeId: string } }
) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse('Unauthenticated', { status: 401 });
		}

		if (!params.storeId) {
			return new NextResponse('Store id is required', { status: 400 });
		}

		const store = await prismadb.store.deleteMany({
			where: { id: params.storeId, userId },
		});

		return NextResponse.json(store);
	} catch (error) {
		console.log('[STORES_DELETE]', error);
		return new NextResponse('Iternal error', { status: 500 });
	}
}
