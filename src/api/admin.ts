import axiosInstance from "../utils/axiosInstance";
export const fetchUserGender = async () => {
  const res = await axiosInstance.get(`/admin/user-analytics/gender`);
  if (res && res.data) {
    return res.data;
  }
};

export const fetchAverageUsageTime = async () => {
  const res = await axiosInstance.get(
    `/admin/user-analytics/get-average-usage-time`
  );
  if (res && res.data.averageDailyUsage) {
    return res.data.averageDailyUsage;
  }
};

export const fetchDailyActiveUser = async () => {
  const res = await axiosInstance.get(`/admin/get-daily-active-user`);
  if (res && res.data.dailyActiveUsers) {
    return res.data.dailyActiveUsers;
  }
};

export const fetchMonthlyTrend = async () => {
  const res = await axiosInstance.get(`/admin/get-monthly-trend`);
  if (res && res.data) {
    return res.data;
  }
};
