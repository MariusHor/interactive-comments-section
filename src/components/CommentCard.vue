<script setup>
import LikesCounter from './LikesCounter.vue'
import ReplyButton from './ReplyButton.vue'

defineProps({
    comment: Object
})
</script>

<template>
    <div class="comment-card">
        <div class="comment-card__user">
            <img :src="comment.user.image.webp" alt="user avatar" class="comment-card__user-avatar">
            <h3 class="heading-m">{{ comment.user.username }}</h3>
            <span class="text-pale">{{ comment.createdAt }}</span>
        </div>
        <p class="comment-card__content text-pale">
            {{ comment.content }}
        </p>
        <LikesCounter :score="comment.score" :commentId="comment.id" />
        <ReplyButton />
    </div>
</template>

<style lang="sass">
.comment-card 
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.25rem
    max-width: 45.625rem
    padding: 1rem
    border-radius: 0.5rem
    background-color: var(--color-white)
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
</style>