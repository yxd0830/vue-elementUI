/**
 * New node file
 */
import axios from 'axios'
import queryString from 'query-string'


// axios.defaults.timeout = 500     // 请求超时时间
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // todo
  return response
}, (error) => {
  // console.debug(error.name)
  // console.debug(error.message)
  // 没有登陆跳转到首页
  if (error.name === 'Error') {
    if (!error.message.indexOf('Network Error')) {
      // console.debug('>>> location href')
      if (process.env.NODE_ENV !== 'development') {
        window.location.href = '/index.html'
      }
    }
  }

  return Promise.reject(error)
})

// ajax.get(url, get)
let get = (url, params, callback = (res) => { return res.data }) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params}).then((response) => {
      resolve(callback(response))
    }).catch((e) => {
      reject(e)
    })
  })
}

// ajax.post(url, post, callback)
let post = (url, params = {}, callback = (res) => { return res.data }) => {
  return new Promise((resolve, reject) => {
    axios.post(url, queryString.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((response) => {
      resolve(callback(response))
    })
  })
}

// 上传文件
let upload = (url, data, config = () => {}, callback = (res) => { return res.data }) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (event) {
        if (config.onUploadProgress) {
          config.onUploadProgress(event)
        }
      }
    }).then((response) => {
      resolve(callback(response))
    })
  })
}

// 返回模拟数据
let mock = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 200)
  })
}

// export
export default {
  get,
  post,
  upload,
  mock
}
