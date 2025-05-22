import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import AuthLayout from "../../layouts/AuthLayout"
import { useEffect, useState } from "react"

const ForgetPassword = () => {

    const { loading, error, forgetPassword, otpEmail } = useAuthContext()

    const [email, setEmail] = useState(null)
    const navigate = useNavigate();

    const submitHandl = async (event) => {
        event.preventDefault()
        await forgetPassword(email)


    }

    const inputHandle = (event) => {
        let email = event.target.value;
        setEmail(email);
    }

    useEffect(() => {
        if (otpEmail) {
            navigate("/verify-otp", { state: { email: otpEmail } });
        }
    }, [otpEmail, navigate])
    return (
        <AuthLayout>
            <h3 className="mb-4 text-center">Forget Password</h3>
            <form onSubmit={submitHandl}>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        onChange={inputHandle}
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                </div>

                {error && (
                    <div className="mb-3 text-danger text-center small">{error}</div>
                )}

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                </button>

                <div className="text-center mt-3">
                    <small>
                        Don’t have an account? <Link to="/register">Register</Link>
                    </small>
                </div>
            </form>
        </AuthLayout>
    )
}

export default ForgetPassword