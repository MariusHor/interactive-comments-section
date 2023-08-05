<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CommentCard from './CommentCard.vue'

const store = useStore()
const comments = computed(() => store.state.comments)

</script>

<template>
    <ul class="comments-list">
        <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
    </ul>
</template>

<style scoped lang="sass">
.comments-list 
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding-top: 2rem
    gap: 1rem
    width: 100%
    @media screen and (min-width: 756px)
        padding-top: 4rem

</style>
