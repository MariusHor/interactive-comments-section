<script setup>
import { ref } from 'vue'
import CommentCard from './CommentCard.vue'
import CommentsForm from './CommentsForm.vue'

const props = defineProps({
    comment: Object
})


const emit = defineEmits(['removeReplyForms'])

const isMainReply = ref(false)
const isInnerReply = ref(false)
const replyingToId = ref(null)

function handleMainReply() {
    emit('removeReplyForms')
    isMainReply.value = true
    replyingToId.value = props.comment.id
}

function handleInnerReply(id) {
    emit('removeReplyForms')
    isInnerReply.value = true
    replyingToId.value = id
}

defineExpose({
    isMainReply,
    isInnerReply,
})

</script>

<template>
    <li class="comment-thread">
        <CommentCard :comment="comment" @handleReply="handleMainReply" />
        <div v-if="comment.replies.length" class="comment-thread__replies">
            <CommentCard v-for="reply in comment.replies" :key="reply.id" :comment="reply" :isReply="true"
                @handleReply="handleInnerReply" />
            <CommentsForm v-if="isInnerReply" :isReplying="true" :mainThreadId="comment.id" :replyingToId="replyingToId"
                @removeReplyForm="isInnerReply = false" ref="form" />
        </div>
        <CommentsForm v-if="isMainReply" :isReplying="true" :mainThreadId="comment.id"
            @removeReplyForm="isMainReply = false" :replyingToId="replyingToId" />
    </li>
</template>

<style scoped lang="sass">
    .comment-thread
        display: flex
        flex-direction: column
        gap: 1rem
        width: 100%

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