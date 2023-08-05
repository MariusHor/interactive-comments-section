<script setup>
import { ref, onMounted } from 'vue'
import CommentCard from './components/CommentCard.vue'

const comments = ref([])
const currentUser = ref(null)

onMounted(() => {
  fetch('data.json').then(response => response.json())
    .then((data) => {
      comments.value = data.comments
      currentUser.value = data.currentUser
    });
})
</script>

<template>
  <ul>
    <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
  </ul>
</template>

<style scoped></style>
