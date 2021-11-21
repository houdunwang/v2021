import useRequest from '../composables/useRequest'
import { ref, watch } from 'vue'
const todos = ref([])
const orderBy = ref('asc')

export default () => {
  const request = useRequest()
  const load = async () => {
    todos.value = await request.get()
    sort()
  }

  const del = async id => {
    await request.delete(id)
    load()
  }

  const add = async todo => {
    await request.post(todo)
    load()
  }

  const sort = () => {
    todos.value = Array.prototype.sort.call(todos.value, (a, b) => {
      return orderBy.value == 'asc' ? a.id - b.id : b.id - a.id
    })
  }

  watch(orderBy, () => sort())

  return { todos, del, load, add, orderBy }
}
