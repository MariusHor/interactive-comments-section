import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import comments from './modules/comments'
import currentUser from './modules/currentUser'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    comments,
    currentUser
  },
  plugins: [vuexLocal.plugin]
})
