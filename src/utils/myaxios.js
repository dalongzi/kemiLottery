import axios from 'axios'
import Vue from 'vue'

// 配置基础路径
axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
console.log(process.env);

// 请求拦截器
axios.interceptors.request.use(function (config) {
  var token = localStorage.getItem("token");
  config.headers.common['Authorization'] = "Bearer " + token;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// url:地址 ;  params:对象
var myaxios = {
  get: function (url, params) {
    return axios.get(url, { params: params })
  },
  post: function (url, params) {
    return axios.post(url, params)
  }
}

Vue.prototype.$http = myaxios;

export default myaxios