import axios from 'axios'
import Swal from 'sweetalert2'


// API 串接前置準備
const baseURL = "https://sheltered-oasis-13839.herokuapp.com/api"
const axiosInstance = axios.create({
  baseURL,
  // 調整伺服器回傳狀態碼的有效範圍，避免 Axios 自動拋出錯誤而蓋掉原本伺服器寫的錯誤訊息
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
})
axiosInstance.interceptors.request.use(
  config => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')
    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)
export const apiHelper = axiosInstance



// 通知提示
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})