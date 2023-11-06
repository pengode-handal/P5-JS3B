import React from 'react'
import Image from 'next/image'
import prisma from '@/app/lib/db';
import Link from 'next/link';
import Modal from '../Modal/page';



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
          prodName : true,
      },
  });
  return data;
};

const CardList = async () => {

  const products = await getProducts();


  return (
  <>
  <div className="grid grid-cols-1 min-[629px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pr-2 pl-2 bg-[#455d90] h-[100%] pb-5">
  {products.map((product, index) => (
      <div className="card shadow-xl p-3 w-full bg-[#192f5a]" key={product.bisnis.id}>
      <figure><img src="https://imgs3.goodsmileus.com/image/cache/data/productimages/Nendoroids/NijikaIchiji/01_2309191119147223-1200x1200.jpg" alt="Shoes" width={1200} height={1200}/>
      </figure>
      <div className="card-body relative">
      <div className="badge absolute right-8 top-4 badge-outline">{product.bisnis.typeProduct}</div>
        <h2 className="card-title w-[150px]">
          {product.prodName}
        </h2>
        <p>{product.coName}</p>
        <div className="card-actions justify-end">
        <Modal product={product}/>
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