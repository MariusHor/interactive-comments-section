import dayjs from 'dayjs'

const state = {
  nextCommentId: 5,
  items: [
    {
      id: 1,
      content: `Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. 
        You've nailed the design and the responsiveness at various breakpoints works really well.`,
      createdAt: '2023-07-25T13:00:26.339Z',
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
      content: `Woah, your project looks awesome! How long have you been coding for? 
        I'm still new, but think I want to dive into React as well soon. 
        Perhaps you can give me an insight on where I can learn React? Thanks!`,
      createdAt: '2023-08-03T13:00:09.339Z',
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
          content: `If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React.
            It's very tempting to jump ahead but lay a solid foundation first.`,
          createdAt: '2023-08-05T12:00:06.339Z',
          score: 4,
          replyingTo: {
            id: 2,
            username: 'maxblagun',
            content: `Woah, your project looks awesome! How long have you been coding for? 
            I'm still new, but think I want to dive into React as well soon. 
            Perhaps you can give me an insight on where I can learn React? Thanks!`
          },
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
          content: `I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. 
            But the fundamentals are what stay constant.`,
          createdAt: '2023-08-06T13:00:26.339Z',
          score: 2,
          replyingTo: {
            username: 'ramsesmiron',
            id: 3,
            content: `If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React.
            It's very tempting to jump ahead but lay a solid foundation first.`
          },
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
}

const getters = {
  getUsernameByCommentId: (state) => (id) => {
    return state.items.reduce((final, current) => {
      if (current.id === id) {
        final += current.user.username
        return final
      }
      current.replies.forEach((reply) => {
        if (reply.id === id) {
          final += reply.user.username
          return final
        }
      })

      return final
    }, '')
  }
}

const mutations = {
  incrementLikes(state, commentId) {
    state.items.forEach((comment) => {
      if (comment.id === commentId) {
        comment = { ...comment, score: comment.score++ }
        return
      }
      comment.replies.forEach((reply) => {
        if (reply.id === commentId) comment = { ...reply, score: reply.score++ }
      })
    })
  },
  decrementLikes(state, commentId) {
    state.items.forEach((comment) => {
      if (comment.id === commentId) {
        comment = { ...comment, score: comment.score-- }
        return
      }
      comment.replies.forEach((reply) => {
        if (reply.id === commentId) comment = { ...reply, score: reply.score-- }
      })
    })
  },
  addComment(state, comment) {
    state.items.push({
      ...comment,
      id: state.nextCommentId,
      createdAt: dayjs().toString(),
      score: 0,
      replies: []
    })

    state.nextCommentId++
  },
  deleteComment(state, payload) {
    state.items.forEach((comment, commentIndex) => {
      if (comment.id === payload.id) {
        state.items.splice(commentIndex, 1)
        return
      }
      comment.replies.forEach((reply, replyIndex) => {
        if (reply.id === payload.id) {
          comment.replies.splice(replyIndex, 1)
        }
      })
    })
  },
  addReply(state, payload) {
    const mainThread = state.items.find((comment) => comment.id === payload.mainThreadId)

    const mainComment =
      payload.mainThreadId === payload.replyingToId
        ? mainThread
        : mainThread.replies.find((reply) => reply.id === payload.replyingToId)

    mainThread.replies.push({
      ...payload.comment,
      id: state.nextCommentId,
      createdAt: dayjs().toString(),
      score: 0,
      replyingTo: {
        id: mainComment.id,
        username: mainComment.user.username,
        content: mainComment.content
      }
    })

    state.nextCommentId++
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
