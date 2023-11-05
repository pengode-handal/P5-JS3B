import prisma from "@/app/lib/db"
import { FC } from "react"


interface pageProps {
    params: {id: string}
} 

const Details: FC<pageProps> = async ({params}) => {
    const db = await prisma.product.findUnique({
        where: { 
            id: parseInt(params.id)
        }, 
        include: {
            bisnis: true
        }
    })
    return (
        <div>{db?.bisnis.typeProduct}</div>
    )
}

export default Details