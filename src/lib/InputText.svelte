<script>
    export let name , id, placeholder, value;
</script>

<input type="text" placeholder={placeholder} name={name} id={id} bind:value={value}>

<style lang="scss">
    input {
        border-radius: 5px;
        border: 1px solid var(--c-border);
        padding: .8rem;
    }
</style>