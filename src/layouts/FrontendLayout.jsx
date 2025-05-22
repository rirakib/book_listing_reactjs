import { useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Breadcrumb from "../components/Breadcrumb"


const FrontendLayout = ({ children }) => {

       let {pathname} = useLocation()

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            {pathname == "/" ? <Banner /> : <Breadcrumb />}
            
            <main className="flex-grow-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default FrontendLayout

