import { Link, NavLink } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const Navbar = () => {

    const {isLogged} = useAuthContext()


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/listing" className="nav-link">Listings</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        {
                            isLogged ? <li className="nav-item">
                                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                            </li> : <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                        }



                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar