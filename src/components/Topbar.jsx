import { useAuthContext } from "../contexts/AuthContext";

const Topbar = () => {

    const { user, logout } = useAuthContext();
    const handleLogout = () => {
        logout();
    };


    return (
        <nav className="navbar navbar-light bg-light justify-content-end px-4 shadow-sm">
            <div className="dropdown">
                <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="profileDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://via.placeholder.com/30"
                        alt="Profile"
                        className="rounded-circle me-2"
                    />
                    John Doe
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="dropdown-item"
                            type="button"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Topbar