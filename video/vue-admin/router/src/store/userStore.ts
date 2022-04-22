import { CacheEnum } from './../enum/cacheEnum'
import userApi, { User } from '@/apis/userApi'
import store from '@/utils/store'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      info: {} as null | User,
    }
  },
  actions: {
    async getUserInfo() {
      if (store.get(CacheEnum.TOKEN_NAME)) {
        const res = await userApi.info()
        this.info = res.data
      }
    },
  },
})
