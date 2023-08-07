<script setup>
import { computed } from 'vue'

const props = defineProps({
  textContent: String,
  variant: String
})

const variantClass = computed(() => `reply-btn--${props.variant}`)
</script>

<template>
  <button class="reply-btn" :class="variantClass">
    <slot></slot>
    <span>{{ textContent }}</span>
  </button>
</template>

<style scoped lang="sass">
.reply-btn
    display: flex
    justify-content: end
    align-items: center
    gap: 0.5rem
    width: fit-content
    font-weight: var(--text-medium)
    transition: opacity var(--transition-primary)
    &:hover
        opacity: 0.6

    &--delete
      color: var(--color-soft-red)

    &--edit, &--reply
      color: var(--color-moderate-blue)
</style>
