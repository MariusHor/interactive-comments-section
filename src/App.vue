<script setup>
import CommentThreadList from './components/CommentThreadList.vue'
import CommentsForm from './components/CommentsForm.vue'
</script>

<template>
  <div class="comments-section">
    <CommentThreadList />
    <CommentsForm />
  </div>
</template>

<style scoped lang="sass">
    .comments-section
      display: flex
      flex-direction: column
      gap: 1rem
      max-width: 45.625rem
      margin: 0 auto
      padding-top: 2rem
      padding-bottom: 2rem
</style>