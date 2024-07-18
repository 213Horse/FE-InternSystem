import { message } from "antd";
import axios from "axios";

let accessToken = localStorage.getItem("accessToken");
let isRefreshing = false;
let refreshPromise = null;

export const axiosClientVer2 = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

async function refreshToken() {
  try {
    const response = await axiosClientVer2.post("auth/refresh-token", {
      accessToken,
    });
    accessToken = response.data.accessToken;
    localStorage.setItem("accessToken", accessToken); // Đảm bảo lưu vào localStorage
    isRefreshing = false;
    refreshPromise = null;
    return accessToken;
  } catch (error) {
    console.error("Refresh token failed", error);
    // Xử lý lỗi làm sao bạn muốn ở đây
    throw error; // Trả về lỗi để cho biết refreshToken đã thất bại
  }
}

axiosClientVer2.interceptors.request.use(
  (config) => {
    accessToken = localStorage.getItem("accessToken"); // Lấy token mới nhất từ localStorage
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClientVer2.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("🚀 ~ Response in Error (in axiosClientVer2):", error);
    if (error.response.status === 409) {
      message.error(error.response.data.errorMessage);
    }
    if (error.response.status === 404) {
      message.error(error.response.data.errorMessage);
    }
    const refreshToken_current = localStorage.getItem("refreshToken");
    const originalRequest = error.config;
    if (refreshToken_current) {
      if (error.response.status === 401 && !originalRequest._retry) {
        console.log("Start get RefreshToken!");
        if (!isRefreshing) {
          isRefreshing = true;
          originalRequest._retry = true;
          try {
            const newToken = await refreshToken();
            console.log("newToken", newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosClientVer2(originalRequest);
          } catch (refreshError) {
            // Xử lý lỗi khi refreshToken thất bại ở đây
            return Promise.reject(refreshError);
          }
        } else {
          // Nếu refreshToken đã được gọi và đang chờ kết quả, thì chờ nó hoàn thành và thử lại yêu cầu gốc sau khi có token mới
          if (!refreshPromise) {
            refreshPromise = refreshToken();
          }
          return refreshPromise.then((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosClientVer2(originalRequest);
          });
        }
      }
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export const handleDangNhap = (newToken) => {
  accessToken = newToken;
  axiosClientVer2.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
  localStorage.setItem("accessToken", accessToken);
};

export const handleDangXuat = () => {
  localStorage.clear();
  sessionStorage.clear();
  accessToken = null;
  axiosClientVer2.defaults.headers.common["Authorization"] = undefined;
};

