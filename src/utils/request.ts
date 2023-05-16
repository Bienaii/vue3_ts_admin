import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ElMessage, ElLoading, ElMessageBox } from "element-plus";
import router from "@/router";
import { storage } from "./storage";
import { de } from "element-plus/es/locale";

// 定义初始化状态码
const TOKEN_INVALID = "Token认证失败, 请重新登录";
const NETWORK_ERROR = "网络请求异常, 请稍后重试";

// response interface { code, msg, success }
interface Response {
  code?: number;
  success?: boolean;
  msg?: string;
}
// response interface { code, msg, success }
interface ResponseData<T = any> extends Response {
  code?: number;
  success?: boolean;
  msg?: string;
  data?: T;
}
const baseURL = import.meta.env.VITE_APP_BASE_API;
// 创建 axios 实例
const service = axios.create({
  baseURL: baseURL,
  method: "POST",
  timeout: 60000,
});

// 请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const headers = config.headers;
  // 获取token 由于是typescript，所以要做排斥赋值
  const { token = "" } = storage.get("userInfo") || {};
  if (headers.Authorization) headers.Authorization = "Bear " + token;

  return config;
});

// 响应拦截
service.interceptors.response.use((response: AxiosResponse) => {
  const { code, data, msg } = response.data;

  // mock接口
  if (response.config.baseURL === '/mock') {
    console.log('mock in');
    
    return data
  }
  if (code === 200) {
    ElMessage.success(msg);
    return data;
  } else if (code === 5001) {
    ElMessage.error(TOKEN_INVALID); // 给予5001的状态码
    // 并且给予用户 一定的反应时间后，跳转登录页
    setTimeout(() => {
      router.push("/login");
    }, 15000);
    return Promise.reject(TOKEN_INVALID); // 抛出异常
  } else {
    // 丢出服务器异常
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

// 请求配置
function request(options: any) {
    if(options.method.toLowerCase() === 'get') options.params = options.data
    return service(options)
}

export default request
