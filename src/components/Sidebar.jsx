import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <nav className="bg-dark text-white p-3" style={{ width: '250px' }}>
            <h4 className="mb-4">MyApp</h4>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link className="nav-link text-white" to="/listing/index">All Listing</Link>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link text-white" href="#">Tasks</a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link text-white" href="#">Settings</a>
                </li>
            </ul>
        </nav>
    )
}
export default Sidebar