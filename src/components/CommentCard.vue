<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { getElementById, scrollToElement, highlightElement } from '../helpers'
import LikesCounter from './LikesCounter.vue'
import IconButton from './IconButton.vue'
import FromNow from './FromNow.vue'

const props = defineProps({
  comment: Object,
  isReply: Boolean
})

const store = useStore()

const isCurrentUserComment = computed(
  () => store.getters['currentUser/getUsername'] === props.comment.user.username
)

function handleGoToComment() {
  const element = getElementById(props.comment.replyingTo.id)
  scrollToElement(element)
  highlightElement(element)
}

function handleDelete() {
  store.commit('comments/deleteComment', {
    id: props.comment.id
  })
}
</script>

<template>
  <div class="comment-card" :id="comment.id">
    <div class="comment-card__user">
      <img :src="comment.user.image.webp" alt="user avatar" class="comment-card__user-avatar" />
      <h3 class="heading-m">{{ comment.user.username }}</h3>
      <div v-if="isCurrentUserComment" class="user-badge">
        <span>you</span>
      </div>
      <FromNow :date="comment.createdAt" />
    </div>
    <p class="comment-card__content text-pale">
      <button v-if="isReply" class="replying-to" @click="handleGoToComment">
        @{{ comment.replyingTo.username }}
      </button>
      {{ comment.content }}
    </p>
    <LikesCounter :score="comment.score" :commentId="comment.id" />
    <div class="comment-card__actions">
      <IconButton
        v-if="!isCurrentUserComment"
        @click="$emit('handleReply', { id: comment.id, isReply })"
        :textContent="'Reply'"
        :variant="'reply'"
      >
        <img src="/images/icon-reply.svg" alt="" />
      </IconButton>
      <div v-else class="comment-card__user-actions">
        <IconButton @click="handleDelete" :textContent="'Delete'" :variant="'delete'">
          <img src="/images/icon-delete.svg" alt="" />
        </IconButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.comment-card
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.25rem
    max-width: 45.625rem
    padding: 1rem
    border-radius: 0.5rem
    background-color: var(--color-white)
    border: solid 1px var(--color-white)
    transition: border var(--transition-primary)
    @media screen and (min-width: 756px)
        grid-template-columns: 1fr 12fr 1fr
        padding: 1.5rem

    &__user
        grid-column: 1 / 3
        display: flex
        align-items: center
        gap: 0.875rem
        @media screen and (min-width: 756px)
            grid-column: 2 / 3

    &__user-avatar
        max-width: 2rem
        max-height: 2rem

    &__content
        grid-column: 1 / 3
        @media screen and (min-width: 756px)
            grid-column: 2 / 4

    &__actions
        justify-self: end
        @media screen and (min-width: 756px)
            grid-column: 3 / 4
            grid-row: 1 / 2

    &__user-actions
        display: flex
        gap: 1rem

.user-badge
        background: var(--color-moderate-blue)
        color: var(--color-white)
        border-radius: 2px
        padding: 0 0.5rem


.replying-to
    color: var(--color-moderate-blue)
    font-weight: var(--text-medium)
</style>
