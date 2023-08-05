const state = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: '1 month ago',
    score: 12,
    user: {
      image: {
        png: '/images/avatars/image-amyrobson.png',
        webp: '/images/avatars/image-amyrobson.webp'
      },
      username: 'amyrobson'
    },
    replies: []
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: '2 weeks ago',
    score: 5,
    user: {
      image: {
        png: '/images/avatars/image-maxblagun.png',
        webp: '/images/avatars/image-maxblagun.webp'
      },
      username: 'maxblagun'
    },
    replies: [
      {
        id: 3,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: '1 week ago',
        score: 4,
        replyingTo: 'maxblagun',
        user: {
          image: {
            png: '/images/avatars/image-ramsesmiron.png',
            webp: '/images/avatars/image-ramsesmiron.webp'
          },
          username: 'ramsesmiron'
        }
      },
      {
        id: 4,
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: '2 days ago',
        score: 2,
        replyingTo: 'ramsesmiron',
        user: {
          image: {
            png: './images/avatars/image-juliusomo.png',
            webp: './images/avatars/image-juliusomo.webp'
          },
          username: 'juliusomo'
        }
      }
    ]
  }
]

const getters = {}

function findAndUpdateComment(comments, commentId, payload) {
  for (const comment of comments) {
    if (comment.id === commentId) {
      comment.score += payload
      return true
    }
    if (comment.replies && comment.replies.length > 0) {
      if (findAndUpdateComment(comment.replies, commentId, payload)) {
        return true
      }
    }
  }
  return false
}

const mutations = {
  setComments(state, payload) {
    state = payload.value
  },
  incrementLikes(state, payload) {
    if (payload.parentThreadId) {
      const parentThread = state.find((comment) => comment.id === payload.parentThreadId)
      if (parentThread) {
        findAndUpdateComment(parentThread.replies, payload.commentId, 1)
      }
    } else {
      findAndUpdateComment(state, payload.commentId, 1)
    }
  },
  decrementLikes(state, payload) {
    if (payload.parentThreadId) {
      const parentThread = state.find((comment) => comment.id === payload.parentThreadId)
      if (parentThread) {
        findAndUpdateComment(parentThread.replies, payload.commentId, -1)
      }
    } else {
      findAndUpdateComment(state, payload.commentId, -1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
