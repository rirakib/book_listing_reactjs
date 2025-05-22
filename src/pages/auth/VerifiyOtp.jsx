import { Link } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import AuthLayout from "../../layouts/AuthLayout"

const VerifyOtp = () => {

    const {error,loading,otpEmail} = useAuthContext()
    
    return (
        <AuthLayout>
            <h3 className="mb-4 text-center">Verify Otp</h3>
            <form>
                <div className="mb-3">
                    <label>Verify Otp</label>
                    <input
                        type="text"
                        name="otp"
                        className="form-control"
                        placeholder="Enter otp"
                        required
                    />
                </div>

                {error && (
                    <div className="mb-3 text-danger text-center small">{error}</div>
                )}

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? "Verifying..." : "Verify"}
                </button>

                <div className="text-center mt-3">
                    <small>
                        Don't get otp yet ? <Link to="/forget-password">retry</Link>
                    </small>
                </div>
            </form>
        </AuthLayout>
    )
}

export default VerifyOtp