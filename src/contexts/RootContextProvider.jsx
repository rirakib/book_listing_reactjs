import { AuthProvider } from "./AuthContext"
import { ListingProvider } from "./ListingContext"

const RootContextProvider = ({ children }) => {

    return (
        <AuthProvider>
            <ListingProvider>
                {children}
            </ListingProvider>
        </AuthProvider>
    )
}

export default RootContextProvider