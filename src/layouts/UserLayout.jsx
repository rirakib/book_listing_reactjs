import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const UserLayout = ({ children }) => {
    return (
        <div className="d-flex" style={{ minHeight: '100vh' }}>
            <Sidebar />

            <div className="flex-grow-1">
                <Topbar />
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserLayout