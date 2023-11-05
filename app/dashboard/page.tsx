import Navbar from '../components/Navbar/page';
import prisma from '../lib/db';
import AddBisnis from './addBisnis';
import DeleteBisnis from './deleteBisnis';
import PendingEvent from './pendingPage';



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

const getPendings =async () => {
    const data = await prisma.pending.findMany({
        select: {
            id: true,
            coName: true,
            bisnisId: true,
            status: true,
            created_at: true,
            description : true,
            rgPrice: true,
            contact: true,
            imgLink: true,
        },
    });
    return data;
};

const getBisnis = async () => {
    const data = await prisma.bisnis.findMany();
    return data;
    };


const Dashboard = async () => {
    const [products, bisnis, pendings] = await Promise.all([getProducts(), getBisnis(), getPendings()]); 

    return (
    <>
    <Navbar/>
    <div>
    <div className="mb-2">
        <AddBisnis bisnisS={bisnis}/>
    </div>
        <table className='table w-full bg-biru'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Company</th>
                    <th>Jenis</th>
                    <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.coName}</td>
                    <td>{product.bisnis.typeProduct}</td>
                    <td className='text-center'>
                    <DeleteBisnis product={product} />
                    </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                PENDING PRODUCT
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">List Produk Produk yang dipending</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Created
                    </th>
                    <th scope="col" className="px-6 py-3">
                        status
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {pendings.map(pending => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={pending.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {pending.coName}
                    </th>
                    <td className="px-6 py-4">
                        {pending.created_at.toString()}
                    </td>
                    <td className="px-6 py-4">
                        {pending.status}
                    </td>
                    <td className="px-6 py-4">
                        <PendingEvent pending={pending}/>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
</>
    
  )
}

export default Dashboard