const state = {
  image: {
    png: '/images/avatars/image-juliusomo.png',
    webp: '/images/avatars/image-juliusomo.webp'
  },
  username: 'juliusomo'
}

const getters = {
  getData: (state) => {
    return state
  },
  getUsername: (state) => {
    return state.username
  }
}

export default {
  namespaced: true,
  getters,
  state
}
