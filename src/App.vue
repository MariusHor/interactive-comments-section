<script setup>
import CommentsThreadList from './components/CommentsThreadList.vue'
import CommentsForm from './components/CommentsForm.vue'

console.log('This is a main commit change')
</script>

<template>
  <div class="comments-section">
    <CommentsThreadList />
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
  padding: 2rem 0
</style>
