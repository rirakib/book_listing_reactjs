import { Navigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const PrivateRoute = ({children}) => {

    const {isLogged} = useAuthContext()

    return !isLogged ?  <Navigate to="/login" replace /> : children
}

export default PrivateRoute