import Todo from './components/Todo.js'
import db from './data/db.js'

export default {
  components: { Todo },
  data() {
    return { db }
  },
}
