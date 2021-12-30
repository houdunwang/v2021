import { http } from '@/plugins/axios'
export interface User {
  name: string
  age: number
  avatar: string
}

function info() {
  return http.request<User>({
    url: `info`,
  })
}

interface LoginInterface {
  token: string
}
function login(data: any) {
  return http.request<LoginInterface>({
    url: `login`,
    method: 'post',
    data
  })
}

export default { info, login }
