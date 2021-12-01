const login = false

const loginCheck = (to, from, next) => {
  if (!login && to.meta.auth) next('/login')
  else next()
}

export { loginCheck }
