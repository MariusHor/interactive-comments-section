<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  score: Number,
  commentId: Number
})

const store = useStore()

function incrementLikes() {
  store.commit('comments/incrementLikes', props.commentId)
}

function decrementLikes() {
  store.commit('comments/decrementLikes', props.commentId)
}
</script>

<template>
  <div class="likes-counter">
    <button @click="incrementLikes">
      <img src="/images/icon-plus.svg" alt="" />
    </button>
    <span>{{ score }}</span>
    <button @click="decrementLikes">
      <img src="/images/icon-minus.svg" alt="" />
    </button>
  </div>
</template>

<style scoped lang="sass">
.likes-counter
    display: flex
    justify-content: space-between
    align-items: center
    gap: 0.325rem
    width: 6.25rem
    height: 2.5rem
    border-radius: 0.625rem
    background-color: var(--color-very-light-gray)
    color: var(--color-moderate-blue)
    font-weight: var(--text-medium)
    overflow: hidden
    @media screen and (min-width: 756px)
        grid-column: 1 / 2
        grid-row: 1 / 3
        flex-direction: column
        align-self: center
        justify-self: center
        width: 2.5rem
        height: 6.25rem

    button
        display: flex
        align-items: center
        justify-content: center
        height: 100%
        width: 100%
        padding: 0.875rem 0
        transition: background var(--transition-primary)
        &:hover
            background: var(--color-light-gray)
        @media screen and (min-width: 756px)
            padding: 0.625rem 0
</style>
