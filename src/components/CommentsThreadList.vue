<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import CommentThread from './CommentThread.vue'

const store = useStore()
const comments = computed(() => store.state.comments.items)
const elements = ref([])

function removeReplyForms() {
  elements.value = elements.value.filter((element) => element)
  elements.value.forEach((element) => {
    element.removeReplyForm()
  })
}
</script>

<template>
  <ul class="comment-threads">
    <CommentThread
      v-for="(comment, index) in comments"
      :key="comment.id"
      :comment="comment"
      @removeReplyForms="removeReplyForms"
      :ref="(element) => (elements[index] = element)"
    />
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
</style>
