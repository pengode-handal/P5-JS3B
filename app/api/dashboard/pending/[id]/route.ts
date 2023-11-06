import { NextResponse } from "next/server";
import type { Pending } from "@prisma/client";
import prisma from "@/app/lib/db";


export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: Pending = await request.json();
    const product = await prisma.pending.update({
        where:{
            id: Number(params.id)
        },
        data:{
            status : body.status,
        }
    });
    return NextResponse.json(product, {status: 200});
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
    const product = await prisma.pending.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200});
}