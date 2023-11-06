
import prisma from '../lib/db';
import AddBisnis from './addBisnis';


const getProducts = async () => {
    const data = await prisma.pending.findMany({
        select: {
            id: true,
            coName: true,
            contact: true,
            description: true,
            imgLink: true,
            rgPrice: true,
            bisnisId: true,
            status : true,
            created_at : true,
            prodName : true,
        },
    });
    return data;
};

const getBisnis = async () => {
    const data = await prisma.bisnis.findMany();
    return data;
    };


const Dashboard = async () => {
    const [products, bisnis] = await Promise.all([getProducts(), getBisnis()]); 

    return (
    <>
    <div>
    <div className="mb-2">
        <AddBisnis bisnisS={bisnis}/>
    </div>
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <caption className="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-[#192f5a]">
        PENDING PRODUCT
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">List Produk Produk yang dipending</p>
        </caption>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope='col' className='px-6 py-3'>#</th>
                    <th scope='col' className='px-6 py-3'>Nama Company</th>
                    <th scope='col' className='px-6 py-3'>Dibikin</th>
                    <th scope='col' className='px-6 py-3 text-center'>Status</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id} className="bg-white border-b dark:bg-[#192f5a] dark:border-gray-700">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{product.coName}</td>
                    <td className="px-6 py-4">{product.created_at.toString()}</td>
                    <td className="px-6 py-4 text-center">
                    {product.status}
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Dashboard