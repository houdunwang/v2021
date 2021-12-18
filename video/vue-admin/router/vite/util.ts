import _ from 'lodash'
export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true' ? true : false
    }

    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value)
    }
  })
  return envs
}

// type DD<T extends keyof any, B> = {
//   [P in T]: B
// }

// const f: DD<string, string | number> = {
//   age: 34,
// }
