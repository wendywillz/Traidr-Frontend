/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../../app/features/userAuth/userAuthSlice";

interface AdminProtectedRouteChilren {
  children: ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: AdminProtectedRouteChilren) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (!token) navigate("/login");
  useEffect(() => {
    const handleProtectedRoute = async () => {
      const res = await axiosInstance.get("/admin/verify-token");
      if (res.data.userDetail) {
        dispatch(login(res.data.userDetail));
      } else {
        navigate("/login");
      }
    };
    handleProtectedRoute();
  }, []);

  return <>{children}</>;
}
