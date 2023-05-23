// http.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from "element-plus"
import Base from "./Base";
import { Path } from './Path';

const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '登陆过期'
      break
    case 403:
      message = '暂无权限'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}`
}

const service = axios.create({
  // baseURL: '/api',
  baseURL: Path.baseApiPath(),
  withCredentials: true,
  timeout: 1000 * 30,
  validateStatus() {
    return true
  },
  transformResponse: [(data) => {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
})

// 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = Base.getCookie(Base.cookie)
  if (token) {
    const token_type = "Bearer"
    config.headers && (config.headers[`${Base.cookie}`] = token_type + ' ' + token);
  }
  return config
}, (error) => {
  error.data = {}
  error.data.msg = '服务器异常，请联系管理员！'
  return Promise.resolve(error)
})

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
  console.log(response);
  const data = response.data;
  const status = data.statusCode;
  let msg = ''
  if (status < 200 || status >= 300) {
    msg = data.message || showStatus(status)
    ElMessage.error(msg)
    return Promise.reject(data);
  }
  return data;
}, (error) => {
  if (axios.isCancel(error)) {
    console.log('repeated request: ' + error.message)
  } else {
    error.data = {}
    error.data.msg = '请求超时或服务器异常'
    ElMessage.error(error.data.msg)
  }
  return Promise.reject(error)
})

export default service
