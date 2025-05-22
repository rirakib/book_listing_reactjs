import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {


    const { login, isLogged, loading, error } = useAuthContext();

    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
    };


    return (
        <AuthLayout>

            <h3 className="mb-4 text-center">Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="mb-3 text-end">
                    <Link to="/forget-password" className="text-decoration-none">Forgot Password?</Link>
                </div>

                {error && (
                    <div className="mb-3 text-danger text-center small">{error}</div>
                )}

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-3">
                    <small>
                        Don’t have an account? <Link to="/register">Register</Link>
                    </small>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Login;
