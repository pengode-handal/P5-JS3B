import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export const GET = async (request: Request, {params}: {params: {id: string}}) => {
    try {
        const product = await prisma.product.findUnique({
            where:{
                id: Number(params.id)
            },
            include:{
                bisnis: true
            },
        });

        if (product) {
            const data = {
                data: {
                    id: product.id,
                    coName: product.coName,
                    description: product.description,
                    contact: product.contact,
                    image: product.imgLink,
                    range_price: product.rgPrice,
                    type: product.bisnis.typeProduct
                }
            };
    
            return NextResponse.json(data, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Produk tidak ditemukan' }, { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Terjadi kesalahan server' }, { status: 500 });
    }
}
