import { createContext, useContext, useEffect, useReducer } from "react";
import api from "../utils/axios";

const ListingContenxt = createContext()

const initialState = {

    loading: false,
    error: null,
    data: {},
    message: {}

}

const test = () => {
    return "hello test";
}

const listingReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true, error: null };
        case "SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const ListingProvider = ({ children }) => {

    const [state, dispatch] = useReducer(listingReducer, initialState)



    const fetchListing = async () => {

        dispatch({ type: "LOADING" });

        try {
            const res = await api.get("/listings");
            const data = res.data.data.data
            dispatch({ type: "SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message || "Failed to fetch" });
        }
    };


    return (
        <ListingContenxt.Provider value={{ ...state, fetchListing }} >
            {children}
        </ListingContenxt.Provider>
    )
}


export const useListingContext = () => useContext(ListingContenxt)