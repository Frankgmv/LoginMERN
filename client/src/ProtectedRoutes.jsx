import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext"

const ProtectedRoutes = () => {

    const { loading, isAuthenticated } = useAuth();
    if(loading) return <h1>Loading .....</h1>
    if (!loading && !isAuthenticated) return <Navigate to="/login" replace />
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoutes
