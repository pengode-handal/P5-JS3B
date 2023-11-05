import React from 'react'
import Image from 'next/image'
import prisma from '@/app/lib/db';
import Link from 'next/link';



const getProducts = async () => {
  const data = await prisma.product.findMany({
      select: {
          id: true,
          coName: true,
          contact: true,
          description: true,
          imgLink: true,
          rgPrice: true,
          bisnis: true,
          bisnisId: true,
      },
  });
  return data;
};

const CardList = async () => {

  const products = await getProducts();


  return (
  <>
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  {products.map((product, index) => (
      <div className="card bg-base-100 shadow-xl p-3" key={product.bisnis.id}>
      <figure><img src="https://imgs3.goodsmileus.com/image/cache/data/productimages/Nendoroids/NijikaIchiji/01_2309191119147223-1200x1200.jpg" alt="Shoes" width={1200} height={1200}/>
      </figure>
      <div className="card-body relative">
      <div className="badge absolute right-10 badge-outline">{product.bisnis.typeProduct}</div>
        <h2 className="card-title">
          {product.coName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
        <Link href={`/detail/${product.id}`} className="btn btn-primary">
          Details
        </Link>
        </div>
      </div>
    </div>
    )
  )
}
</div>
</>
  )
}

export default CardList