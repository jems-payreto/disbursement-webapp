import { useAppSelector } from "@/app/hook";
import { selectCurrentAccessToken } from "./authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
    const token = useAppSelector(selectCurrentAccessToken);
    const location = useLocation();

    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
