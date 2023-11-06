import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { authUserSession } from '@/app/lib/auth';
import { getServerSession } from 'next-auth'
import Link from 'next/link';


const ButtonOsu = async () => {
    const user = await authUserSession();
    const kelas = user?.name != process.env.PROVIDER_USERNAME ? 'flex justify-center align-center' : 'hidden';
    let actionLabel = '';
    if (user) {
        if (user?.name === process.env.PROVIDER_USERNAME) {
            actionLabel = ''
        } else {
            actionLabel = 'Kamu Bukan Admin'
        }
    }
    else {
        actionLabel = 'Sign In'
    }
    return (
        <div className={`${kelas} btn btn-secondary`}>
            <Link href={'/api/auth/signin/discord'}>{actionLabel}</Link>
        </div>
    )
}

export default ButtonOsu