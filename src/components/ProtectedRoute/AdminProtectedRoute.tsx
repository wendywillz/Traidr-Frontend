/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface AdminProtectedRouteChilren {
  children: ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: AdminProtectedRouteChilren) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) navigate("/login");
  useEffect(() => {
    const handleProtectedRoute = async () => {
      const res = await axiosInstance.get("/admin/verify-token");
      if (
        res.data.noTokenError ||
        res.data.tokenExpiredError ||
        res.data.verificationError ||
        res.data.unauthorized
      ) {
        navigate("/");
      }
    };
    handleProtectedRoute();
  }, []);

  return <>{children}</>;
}
