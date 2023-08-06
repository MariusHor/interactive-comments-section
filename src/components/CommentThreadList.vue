<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CommentThread from './CommentThread.vue'

const store = useStore()
const comments = computed(() => store.state.comments.items)


</script>

<template>
    <ul class="comment-threads">
        <CommentThread v-for="comment in comments" :key="comment.id" :comment="comment" />
    </ul>
</template>

<style scoped lang="sass">
.comment-threads 
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 1rem
    width: 100%
    @media screen and (min-width: 756px)
        padding-top: 4rem

</style>
