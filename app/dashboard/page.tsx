
import ButtonOsu from '../components/Navbar/ButtonOsu';
import { authUserSession } from '../lib/auth';
import prisma from '../lib/db';
import AddBisnis from './addBisnis';
import DeleteBisnis from './deleteBisnis';
import PendingEvent from './pendingPage';
import DeletePending from './deletePending';
import UpdateProduct from './updateBisnis';



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
            prodName : true
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
    const user = await authUserSession()
    let kelas = '' 
    if (user) {
        if (user.name === process.env.PROVIDER_USERNAME) {
            kelas = ''
        } else {
            kelas = 'hidden'
        }
    }
    else {
        kelas = 'hidden'
    }
    return ( 
    <>

    <ButtonOsu/>
    <div className={kelas}>
    <div>
    <div className="mb-2">
        <AddBisnis bisnisS={bisnis}/>
    </div>
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <caption className="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                LIST PRODUCT
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">List Produk Produk yang ada</p>
            </caption>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope='col' className='px-6 py-3 text-center'>#</th>
                    <th scope='col' className='px-6 py-3'>Nama Company</th>
                    <th scope='col' className='px-6 py-3'>Jenis</th>
                    <th scope='col' className='px-6 py-3 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={product.id}>
                    <td className="px-6 py-4 text-center">{index + 1}</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.coName}</th>
                    <td className="px-6 py-4">{product.bisnis.typeProduct}</td>
                    <td className="px-6 py-4 text-center space-x-1">
                    <DeleteBisnis product={product} />
                    <UpdateProduct Bisnis={bisnis} product={product}/>
                    </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </div>
    </div>
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
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
                    <td className="px-6 py-4 flex justify-center content-center">
                        <PendingEvent pending={pending}/>
                        <DeletePending product={pending}/>
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