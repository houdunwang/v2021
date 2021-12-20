import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请示成功',
        type: 'success',
        result: {
          name: '向军大叔',
          age: 18,
          avatar: '/avatar/xj.jpg',
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        type: 'success',
        result: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
