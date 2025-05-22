import { Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/ForgetPassword";
import VerifyOtp from "../pages/auth/VerifiyOtp";
import GuestRoute from "../middleware/GuestRoute";



const routes = [
    {
        'path': '/login',
        'element': <Login />
    },
    {
        'path': '/register',
        'element': <Register />
    }, {
        'path': '/forget-password',
        'element': <ForgetPassword />
    },
    {
        'path': '/verify-otp',
        'element': <VerifyOtp />
    }
]

export const AuthRoutes = routes.map(({ path, element }) => (
    <Route
        key={path}
        path={path}
        element={<GuestRoute>
            {element}
        </GuestRoute>}
    />
));






