import FrontendLayout from "./FrontendLayout"

const AuthLayout = ({ children }) => {
    return (
        <FrontendLayout>
            <div className="container d-flex align-items-center justify-content-center py-5">
                <div className="card shadow p-4" style={{ maxWidth: '450px', width: '100%' }}>
                    {children}
                </div>
            </div>
        </FrontendLayout>
    )
}

export default AuthLayout