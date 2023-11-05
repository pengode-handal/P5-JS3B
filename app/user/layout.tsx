export const metadata = {
    title: "Dashboard"
}
const UserLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="py-10 px-5 ">{children}</div>
    )
}

export default UserLayout