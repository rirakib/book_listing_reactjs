import { createContext, useContext, useReducer } from "react";
import api from "../utils/axios";
import { CSRFURL } from "../utils/Constants";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isLogged: !!localStorage.getItem("token"),
    loading: false,
    error: null,
    otpEmail: null, // for storing the email during OTP process
};

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "START_SUBMIT":
            return { ...state, loading: true, error: null };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLogged: true,
                loading: false,
                error: null,
            };

        case "SUBMIT_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "LOGOUT":
            return {
                ...initialState,
                user: null,
                token: null,
                isLogged: false,
            };

        case "OTP_SEND":
            return {
                ...state,
                loading: false,
                otpEmail: action.payload, // saving the OTP email
            };

        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async ({ email, password }) => {
        dispatch({ type: "START_SUBMIT" });

        try {
            await api.get(CSRFURL);
            const res = await api.post("/login", { email, password });
            const { user, token } = res.data.data;

            dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
        } catch (err) {
            let message = "Login failed";
            if (err.response?.data?.message) message = err.response.data.message;
            dispatch({ type: "SUBMIT_FAILED", payload: message });
        }
    };

    const logout = async () => {
        try {
            await api.post("/logout");
        } catch (error) {
            console.error("Logout failed:", error);
        }

        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
    };

    const register = async ({ name, email, password, password_confirmation }) => {
        dispatch({ type: "START_SUBMIT" });

        try {
            await api.get(CSRFURL);
            const res = await api.post("/register", { name, email, password, password_confirmation });
            const { user, token } = res.data.data;

            dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
        } catch (err) {
            let message = "Register failed";
            if (err.response?.data?.message) message = err.response.data.message;
            dispatch({ type: "SUBMIT_FAILED", payload: message });
        }
    };

    const forgetPassword = async (email) => {
        dispatch({ type: "START_SUBMIT" });

        try {
            await api.get(CSRFURL);
            const res = await api.post("/forget-password", { email });
            const { email: otpEmail } = res.data.data;

            dispatch({ type: "OTP_SEND", payload: otpEmail }); 
        } catch (err) {
            let message = "Forget password failed";
            if (err.response?.data?.message) message = err.response.data.message;
            dispatch({ type: "SUBMIT_FAILED", payload: message });
        }
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logout,
            register,
            forgetPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
