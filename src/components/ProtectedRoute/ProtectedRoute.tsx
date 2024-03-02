// /* eslint-disable react-hooks/exhaustive-deps */
// import { useNavigate } from "react-router-dom";
// import {
//   useContext,
//   createContext,
//   ReactNode,
//   useEffect,
//   useState,
// } from "react";
// import axiosInstance from "../../utils/axiosInstance";

// interface ProtectedRouteChilren {
//   children: ReactNode;
// }
// interface userData {
//   name: string;
//   email: string;
//   profileImage: string;
//   phoneNumber: number;
//   isAdmin: string;
//   isSeller: string;
// }
// interface contextProps {
//   userData?: userData;
// }
// const contextMenu = createContext<contextProps>({});
// export const ContextProvider = () => {
//   return useContext(contextMenu);
// };
// export default function ProtectedRoute({ children }: ProtectedRouteChilren) {
//   const [userData, setUserData] = useState<userData>();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   if (!token) navigate("/login");
//   useEffect(() => {
//     const handleProtectedRoute = async () => {
//       const res = await axiosInstance.get("/verify-token");
//       if (res && res.data.userDetail) {
//         setUserData(res.data.userDetail);
//       } else {
//         navigate("/login");
//       }
//     };
//     handleProtectedRoute();
//   }, []);

//   const contextValue = {
//     userData,
//   };
//   return (
//     <contextMenu.Provider value={contextValue}>
//       <>{children}</>
//     </contextMenu.Provider>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../../app/features/userAuth/userAuthSlice";

interface ProtectedRouteChilren {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteChilren) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (!token) navigate("/login");
  useEffect(() => {
    const handleProtectedRoute = async () => {
      const res = await axiosInstance.get("/verify-token");
      if (res && res.data.userDetail) {
        // dispatching the user data to the redux store, inital state is an object
        dispatch(login(res.data.userDetail));
      } else {
        navigate("/login");
      }
    };
    handleProtectedRoute();
  }, []);

  return <>{children}</>;
}
