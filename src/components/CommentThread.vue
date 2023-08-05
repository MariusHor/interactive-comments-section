<script setup>

import CommentCard from './CommentCard.vue'

defineProps({
    comment: Object
})
</script>

<template>
    <li>
        <CommentCard :comment="comment" />
        <CommentCard v-for="reply in comment.replies" :key="reply.id" :comment="reply" :parentThreadId="comment.id" />
    </li>
</template>