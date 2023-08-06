<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const textareaContent = ref('')
const textareaIsEmpty = computed(() => textareaContent.value.trim().length === 0)
const currentUser = computed(() => store.state.currentUser)

function addComment() {
    store.commit('comments/addComment', {
        content: textareaContent.value,
        user: currentUser.value,
    })

    textareaContent.value = ''
}
</script>

<template>
    <form class="form" @submit.prevent="addComment">
        <textarea v-model="textareaContent" name="textarea-field" id="textarea-field" class="form__textarea"
            placeholder="Add a comment..."></textarea>
        <img :src="currentUser.image.webp" alt="user avatar" class="form__user-avatar">
        <button class="form__submit" :disabled="textareaIsEmpty">SEND</button>
    </form>
</template>

<style scoped lang="sass">
    .form
        display: grid
        gap: 1rem
        grid-template-columns: 1fr 1fr
        max-width: 45.625rem
        padding: 1rem
        border-radius: 0.5rem
        background-color: var(--color-white)
        @media screen and (min-width: 756px)
            grid-template-columns: 0.5fr 8fr 1.5fr

        &__textarea
            grid-column: 1 / 3
            height: 6rem
            padding: 1rem 1.5rem
            border: 1px solid var(--color-light-gray)
            border-radius: 0.5rem
            color: var(--color-grayish-blue)
            transition: border var(--transition-primary)
            scrollbar-width: thin
            scrollbar-color: var(--color-light-grayish-blue)
            &:focus-visible
                border: 1px solid var(--color-moderate-blue) 
            @media screen and (min-width: 756px)
                grid-column: 2 / 3
            &::-webkit-scrollbar
                width: 0.625rem
                background-color: var(--color-light-gray)
                -webkit-border-radius: 1rem

            &::-webkit-scrollbar-thumb 
                background-color: var(--color-light-grayish-blue)
                -webkit-border-radius: 1rem
                -moz-border-radius: 1rem
                -ms-border-radius: 1rem
                -o-border-radius: 1rem

        
        &__user-avatar
            width: 2rem
            height: 2rem
            align-self: center
            @media screen and (min-width: 756px)
                align-self: flex-start
                grid-column: 1 / 2
                grid-row: 1 / 2
        
        &__submit
            justify-self: end
            max-width: 6.5rem
            max-height: 3rem
            height: 100%
            padding: 0.875rem 1.825rem
            background-color: var(--color-moderate-blue)
            border-radius: 0.5rem
            color: var(--color-white)
            font-weight: var(--text-medium)
            transition: opacity var(--transition-primary)
            &:disabled
                opacity: 0.3
                cursor: initial
            &:hover:not([disabled]) 
                opacity: 0.6
            @media screen and (min-width: 756px)
                grid-column: 3 / 4
</style>