
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const GuestRoute = ({ children }) => {

    const { isLogged } = useAuthContext()

    return isLogged ? <Navigate to="/dashboard" replace /> : children
}

export default GuestRoute