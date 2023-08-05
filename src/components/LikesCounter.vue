<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    score: Number,
    commentId: Number,
    parentThreadId: Number
})

const store = useStore()

function incrementLikes() {
    store.commit('comments/incrementLikes', {
        commentId: props.commentId,
        parentThreadId: props.parentThreadId
    })
}

function decrementLikes() {
    store.commit('comments/decrementLikes', {
        commentId: props.commentId,
        parentThreadId: props.parentThreadId
    })
}

</script>

<template>
    <div class="likes-counter">
        <button @click="incrementLikes">
            <img src="/images/icon-plus.svg" alt="">
        </button>
        <span>{{ score }}</span>
        <button @click="decrementLikes">
            <img src="/images/icon-minus.svg" alt="">
        </button>
    </div>
</template>

<style lang="sass">
    .likes-counter
        display: flex
        gap: 0.325rem
        justify-content: space-between
        align-items: center
        max-width: 6.25rem
        width: 100%
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
            max-width: 2.5rem
            max-height: 6.25rem
            height: 100%

        button
            display: flex
            align-items: center
            justify-content: center
            height: 100%
            width: 100%
            padding-top: 0.875rem
            padding-bottom: 0.875rem
            transition: background var(--transition-primary)
            &:hover
                background: var(--color-light-gray) 
            @media screen and (min-width: 756px)
                padding-top: 0.625rem
                padding-bottom: 0.625rem
</style>