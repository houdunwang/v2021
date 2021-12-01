const host = `http://127.0.0.1:3003/user`
const all = () => {
  return fetch(host).then(r => r.json())
}
const find = id => {
  return fetch(host + `/${id}`).then(r => r.json())
}

export default { all, find }
