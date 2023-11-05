import Navbar from '../components/Navbar/page';
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
                    <th>Dibikin</th>
                    <th className='text-center'>Status</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.coName}</td>
                    <td>{product.created_at.toString()}</td>
                    <td className='text-center'>
                    {product.status}
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