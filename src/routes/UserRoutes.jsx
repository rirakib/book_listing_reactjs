import { Route } from "react-router-dom"
import Dashboard from "../pages/user/Dashboard"
import Profile from "../pages/user/Profile"
import ListingIndex from "../pages/user/listing/ListingIndex"
import ListingCreate from "../pages/user/listing/ListingCreate"
import PrivateRoute from "../middleware/PrivateRoute"


const protectedRoutes = [
    {
        'path': '/dashboard',
        'element': <Dashboard />
    },
    {
        'path': '/profile',
        'element': <Profile />
    },
    {
        'path': '/listing/index',
        'element': <ListingIndex />
    },
    {
        'path': '/listing/create',
        'element': <ListingCreate />
    }

]


export const UserRoutes = protectedRoutes.map(({ path, element }) => (
    
  <Route
    key={path}
    path={path}
    element={<PrivateRoute>{element}</PrivateRoute>}
  />

));