<script setup>
</script>

<template>
    <div class="comment-card">
        <div class="comment-card__user">
            <img src="images/avatars/image-amyrobson.webp" alt="user avatar" class="comment-card__user-avatar">
            <h3 class="heading-m">amyrobson</h3>
            <span class="text-pale">1 month ago</span>
        </div>
        <p class="comment-card__content text-pale">
            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed
            the design and the responsiveness at various breakpoints works really well.
        </p>
        <div class="comment-card__likes">
            <button>
                <img src="images/icon-plus.svg" alt="">
            </button>
            <span>12</span>
            <button class="button-minus">
                <img src="images/icon-minus.svg" alt="">
            </button>
        </div>
        <button class="comment-card__reply-btn">
            <img src="images/icon-reply.svg" alt="">
            <span>Reply</span>
        </button>
    </div>
</template>

<style lang="sass">
.comment-card 
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.25rem
    max-width: 45.625rem
    padding: 1rem
    border-radius: 0.5rem
    background-color: var(--color-white)
    @media screen and (min-width: 756px)
        grid-template-columns: 1fr 12fr 1fr
        padding: 1.5rem

    &__user 
        grid-column: 1 / 3
        display: flex
        align-items: center
        gap: 1rem
        @media screen and (min-width: 756px)
            grid-column: 2 / 3
    
    &__user-avatar 
        max-width: 2rem
        max-height: 2rem

    &__content
        grid-column: 1 / 3
        @media screen and (min-width: 756px)
            grid-column: 2 / 4

    &__likes
        display: flex
        gap: 0.325rem
        justify-content: space-between
        align-items: center
        max-width: 6.25rem
        width: 100%
        border-radius: 0.625rem
        background-color: var(--color-very-light-gray)
        color: var(--color-moderate-blue)
        font-weight: var(--text-medium)
        overflow: hidden
        @media screen and (min-width: 756px)
            grid-column: 1 / 2
            grid-row: 1 / 3
            flex-direction: column
            align-self: center
            justify-self: center
            max-width: 2.5rem
            max-height: 6.25rem
            height: 100%

        button
            display: flex
            align-items: center
            justify-content: center
            height: 100%
            width: 100%
            padding-top: 0.875rem
            padding-bottom: 0.875rem
            transition: background var(--transition-primary)
            &:hover
                background: var(--color-light-gray) 
            @media screen and (min-width: 756px)
                padding-top: 0.625rem
                padding-bottom: 0.625rem

    &__reply-btn
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