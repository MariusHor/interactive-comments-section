<script setup>
import { getElementById, scrollToElement, highlightElement } from '../helpers'
import LikesCounter from './LikesCounter.vue'
import ReplyButton from './ReplyButton.vue'
import FromNow from './FromNow.vue'

const props = defineProps({
    comment: Object,
    isReply: Boolean
})

function handleGoToComment() {
    const element = getElementById(props.comment.replyingTo.id)
    scrollToElement(element)
    highlightElement(element)
}
</script>

<template>
    <div class="comment-card" :id="comment.id">
        <div class="comment-card__user">
            <img :src="comment.user.image.webp" alt="user avatar" class="comment-card__user-avatar">
            <h3 class="heading-m">{{ comment.user.username }}</h3>
            <FromNow :date="comment.createdAt" />
        </div>
        <p class="comment-card__content text-pale">
            <button v-if="isReply" class="replying-to" @click="handleGoToComment">
                @{{ comment.replyingTo.username }}
            </button>
            {{ comment.content }}
        </p>
        <LikesCounter :score="comment.score" :commentId="comment.id" />
        <ReplyButton @click="$emit('handleReply', comment.id)" />
    </div>
</template>

<style lang="sass" scoped>
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
        gap: 1rem
        @media screen and (min-width: 756px)
            grid-column: 2 / 3
    
    &__user-avatar 
        max-width: 2rem
        max-height: 2rem

    &__content
        grid-column: 1 / 3
        @media screen and (min-width: 756px)
            grid-column: 2 / 4

.replying-to 
    color: var(--color-moderate-blue)
    font-weight: var(--text-medium)
</style>