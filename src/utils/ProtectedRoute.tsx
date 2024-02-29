/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import axiosInstance from "./axiosInstance";

interface ProtectedRouteChilren {
  children: ReactNode;
}
interface userData {
  name: string;
  email: string;
  imagePath: string;
  phoneNumber: number;
  isAdmin: string;
  isSeller: string;
}
interface contextProps {
  userData?: userData;
}
const contextMenu = createContext<contextProps>({});
export const ContextProvider = () => {
  return useContext(contextMenu);
};
export default function ProtectedRoute({ children }: ProtectedRouteChilren) {
  const [userData, setUserData] = useState<userData>();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) navigate("/login");
  useEffect(() => {
    const handleProtectedRoute = async () => {
      const res = await axiosInstance.get("/verify-token");
      if (res && res.data.userDetail) {
        setUserData(res.data.userDetail);
      } else {
        navigate("/login");
      }
    };
    handleProtectedRoute();
  }, []);

  const contextValue = {
    userData,
  };
  return (
    <contextMenu.Provider value={contextValue}>
      <>{children}</>
    </contextMenu.Provider>
  );
}
