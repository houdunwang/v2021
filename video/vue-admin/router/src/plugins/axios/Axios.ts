import { CacheEnum } from './../../enum/cacheEnum'
import store from '@/utils/store'
import axios, { AxiosRequestConfig } from 'axios'
import router from '@/router'
import errorStore from '@/store/errorStore'

export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors()
  }

  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<D>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        config.headers = {
          Authorization: 'Bearer ' + store.get(CacheEnum.TOKEN_NAME),
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        switch (error.response.status) {
          case 401:
            store.remove(CacheEnum.TOKEN_NAME)
            router.push({ name: 'login' })
            break
          case 422:
            //后台表单验证错误
            errorStore().errors = {}
            break
        }
        return Promise.reject(error)
      },
    )
  }
}
