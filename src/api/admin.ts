import axiosInstance from "../utils/axiosInstance";
export const fetchUserGender = async () => {
  const res = await axiosInstance.get(`/admin/user-analytics/gender`);
  if (res && res.data) {
    return res.data
  }
};

export const fetchAverageUsageTime = async () => {
  const res = await axiosInstance.get(`/admin/user-analytics/get-average-usage-time`);
  if (res && res.data.averageDailyUsage) {
    return res.data.averageDailyUsage
  }
}