import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Pending } from "@prisma/client";

const db = new PrismaClient();

export const POST = async (request: Request) => {
    const body: Pending = await request.json()
    const products = await db.pending.create({
        data:{
            coName : body.coName,
            contact : body.contact,
            rgPrice : body.rgPrice,
            description : body.description,
            bisnisId: body.bisnisId,
            imgLink : body.imgLink,
            status : "Pending",
        },
        
    });
    return NextResponse.json(products);
};