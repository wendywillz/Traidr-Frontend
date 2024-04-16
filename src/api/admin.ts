import axiosInstance from "../utils/axiosInstance";
export const fetchUserGender = async () => {
  const res = await axiosInstance.get(`/admin/user-analytics/gender`);
  if (res && res.data) {
    return res.data;
  }
};

export const fetchAverageUsageTime = async () => {
  const res = await axiosInstance.get(`/admin/user-analytics/get-average-usage-time`);
  if (res && res.data.sortedAverageDailyUsage) {
    return res.data.sortedAverageDailyUsage
  }
}

export const fetchDailyActiveUser = async () => { 
  const res = await axiosInstance.get(`/admin/get-daily-active-user`);
  if (res && res.data.sortedDailyActiveUser) {
    return res.data.sortedDailyActiveUser
  }
}
export const fetchMonthlyActiveUser = async () => { 
  const res = await axiosInstance.get(`/admin/get-monthly-active-user`);
  if (res && res.data.sortedMonthlyActiveUsers) {
    return res.data.sortedMonthlyActiveUsers
  }
}
export const fetchMonthlyTrend = async () => {
  const res = await axiosInstance.get(`/admin/get-monthly-trend`);
  if (res && res.data) {
    return res.data;
  }
};


export const fetchAdminDataSummary = async()=>{
  const res = await axiosInstance.get(`/admin/get-dashboard-summary`);
  if (res && res.data){
    return res.data.adminDataSummary
  }
}

export const fetchTenantDatabase = async()=>{
  const res = await axiosInstance.get(`/admin/get-tenant-db`)
  if (res && res.data){
    return res.data.tenantsShopDetails
  }
}

export const fetchProductSalesDetails = async()=>{
  const res = await axiosInstance.get(`/admin/get-product-revenue`)
  if(res && res.data){
    return res.data.sortedProductNameSales
  }
}

export const fetchTenantSalesDetails = async()=>{
  const res = await axiosInstance.get(`/admin/get-tenant-revenue`)
  if(res && res.data){
    return res.data.allTenantSalesDetails
  }
}