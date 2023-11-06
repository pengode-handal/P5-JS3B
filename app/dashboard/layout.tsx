import Navbar from "../components/Navbar/page"
import Footer from './../components/Footer/route';

export const metadata = {
    title: "Dashboard"
}
const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        <div className="py-1 px-5 ">{children}</div>
        </>

    )
}

export default DashboardLayout