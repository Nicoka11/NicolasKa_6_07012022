<script>
	export let count,
		liked,
		increment = false;
</script>

{#if increment}
	<button class="likes-count" on:click={() => (liked = !liked)}>
		<p>{liked ? count + 1 : count}</p>
		<span class="material-icons"> favorite </span>
	</button>
{:else}
	<div class="likes-count">
		<p>{count}</p>
		<span class="material-icons"> favorite </span>
	</div>
{/if}

<style lang="scss">
	.likes-count {
		display: flex;
		gap: 0.3rem;
		cursor: pointer;
		align-items: center;
        border: none;
        outline: none;
        color: inherit;
        background-color: inherit;
        font-size: inherit;
	}
</style>
