import { createStore } from 'vuex'
import comments from './modules/comments'
import currentUser from './modules/currentUser'

export default createStore({
  modules: {
    comments,
    currentUser
  }
})
