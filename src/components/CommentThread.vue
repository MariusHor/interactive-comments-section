<script setup>
import { ref } from 'vue'
import CommentCard from './CommentCard.vue'
import CommentsForm from './CommentsForm.vue'

defineProps({
  comment: Object
})

const emit = defineEmits(['removeReplyForms'])

const formKey = ref(0)
const replyType = ref('')
const replyingToId = ref(null)

function handleReply(payload) {
  emit('removeReplyForms')
  replyingToId.value = payload.id
  if (payload.isReply) replyType.value = 'innerReply'
  if (!payload.isReply) replyType.value = 'mainReply'
  formKey.value++
}

defineExpose({
  replyType
})
</script>

<template>
  <li class="comment-thread">
    <CommentCard :comment="comment" @handleReply="handleReply" />
    <div v-if="comment.replies.length" class="comment-thread__replies">
      <CommentCard
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
        :isReply="true"
        @handleReply="handleReply"
      />
      <CommentsForm
        v-if="replyType === 'innerReply'"
        :isReplying="true"
        :mainThreadId="comment.id"
        :replyingToId="replyingToId"
        @removeReplyForm="replyType = null"
        :key="formKey"
      />
    </div>
    <CommentsForm
      v-if="replyType === 'mainReply'"
      :isReplying="true"
      :mainThreadId="comment.id"
      @removeReplyForm="replyType = null"
      :replyingToId="replyingToId"
      :key="formKey"
    />
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
