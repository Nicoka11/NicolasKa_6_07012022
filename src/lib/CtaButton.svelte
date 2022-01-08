<script>
export let value = 'button';
export let clickHandler;
</script>

<button on:click={clickHandler}>{value}</button>

<style lang="scss">
    button {
        font-family: inherit;
        height: fit-content;
        width: fit-content;
        padding: 0.7rem 0.4rem;
        font-size: 1rem;
        border: none;
        background-color: var(--c-main);
        color: white;
        border-radius: 5px;
        transition: all .4s ease;
        cursor: pointer;
        
        &:hover, &:active {
            background-color: var(--c-main-hover);
            color: black;
        }
    }
</style>