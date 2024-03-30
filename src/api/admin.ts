import axiosInstance from "../utils/axiosInstance";
export const fetchUserGender = async () => {
  const res = await axiosInstance.get(`/admin/user-analytics/gender`);
  if (res && res.data) {
    return res.data
  }
};