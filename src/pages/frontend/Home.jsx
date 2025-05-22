import {useAuthContext} from "../../contexts/AuthContext"
import FrontendLayout from "../../layouts/FrontendLayout"

const Home = () => {

    let user = useAuthContext()

    return (
        <FrontendLayout>
        </FrontendLayout>
    )
}

export default Home