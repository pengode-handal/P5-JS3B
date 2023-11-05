export const metadata = {
    title: "Dashboard"
}
const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="py-10 px-5 ">{children}</div>
    )
}

export default DashboardLayout