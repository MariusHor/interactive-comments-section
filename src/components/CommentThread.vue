<script setup>

import CommentCard from './CommentCard.vue'

defineProps({
    comment: Object
})
</script>

<template>
    <li class="comment-thread">
        <CommentCard :comment="comment" />
        <div v-if="comment.replies.length" class="comment-thread__replies">
            <CommentCard v-for="reply in comment.replies" :key="reply.id" :comment="reply" :parentThreadId="comment.id" />
        </div>
    </li>
</template>

<style scoped lang="sass">
    .comment-thread
        display: flex
        flex-direction: column
        gap: 1rem

        &__replies
            display: flex
            flex-direction: column
            gap: 1rem
            padding-left: 1rem
            border-left: 2px solid var(--color-light-gray)

            @media screen and (min-width: 640px)
                padding-left: 2.625rem
                margin-left: 2.875rem
</style>