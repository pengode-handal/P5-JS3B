
import { NextResponse } from "next/server";
import type { Product } from "@prisma/client";
import prisma from "@/app/lib/db";



export const POST = async (request: Request) => {
    const body: Product = await request.json()
    const products = await prisma.product.create({
        data:{
            coName : body.coName,
            contact : body.contact,
            rgPrice : body.rgPrice,
            description : body.description,
            bisnisId: body.bisnisId,
            imgLink : body.imgLink,
            prodName : body.prodName
        },
        
    });
    return NextResponse.json(products);
};