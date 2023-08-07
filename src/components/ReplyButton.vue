<script setup></script>

<template>
  <button class="reply-btn">
    <img src="/images/icon-reply.svg" alt="" />
    <span>Reply</span>
  </button>
</template>

<style scoped lang="sass">
.reply-btn
    display: flex
    justify-self: end
    justify-content: end
    align-items: center
    gap: 0.5rem
    width: fit-content
    color: var(--color-moderate-blue)
    font-weight: var(--text-medium)
    transition: opacity var(--transition-primary)
    &:hover
        opacity: 0.6
    @media screen and (min-width: 756px)
        grid-column: 3 / 4
        grid-row: 1 / 2
</style>
