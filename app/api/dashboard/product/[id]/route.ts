import { NextResponse } from "next/server";
import type { Product } from "@prisma/client";
import prisma from "@/app/lib/db";


export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: Product = await request.json();
    const product = await prisma.product.update({
        where:{
            id: Number(params.id)
        },
        data:{
            coName : body.coName,
            contact : body.contact,
            rgPrice : body.rgPrice,
            description : body.description,
            bisnisId: body.bisnisId,
            imgLink : body.imgLink,
            prodName: body.prodName
        },
    });
    return NextResponse.json(product, {status: 200});
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
    const product = await prisma.product.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200});
}