import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {

    const { register, isLogged, loading, error } = useAuthContext();

    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            password: "",
            confirmation_password: ""
        }
    )

    const inputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(form);
    };




    return (
        <AuthLayout>
            <h3 className="mb-4 text-center">Register</h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={inputChange}
                        value={form.name}
                        required
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        onChange={inputChange}
                        value={form.email}
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
                        onChange={inputChange}
                        value={form.password}
                        className="form-control"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        onChange={inputChange}
                        value={form.password_confirmation}
                        className="form-control"
                        placeholder="Confirmation Password"
                        required
                    />
                </div>

                {error && (
                    <div className="mb-3 text-danger text-center small">{error}</div>
                )}


                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Register in....' : 'Register'}
                </button>

                <div className="text-center mt-3">
                    <small>
                        Already has account <Link to="/login">Login</Link>
                    </small>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Register