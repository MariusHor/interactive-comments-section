const state = {
  image: {
    png: '/images/avatars/image-juliusomo.png',
    webp: '/images/avatars/image-juliusomo.webp'
  },
  username: 'juliusomo'
}

export default {
  namespaced: true,
  getters: {
    getData(state) {
      return state
    },
    getCurrentUserName(state) {
      return state.username
    }
  },
  state
}
