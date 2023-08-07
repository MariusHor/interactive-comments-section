<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { computed } from 'vue'

dayjs.extend(relativeTime)

const props = defineProps({
  date: String || Object
})
const createdAt = computed(() => dayjs(props.date).fromNow())
</script>

<template>
  <span class="text-pale">{{ createdAt }}</span>
</template>
